const table = require("../models/adminmodel");
module.exports.addnew = function(req,res)
{
    var feed={success : false , emailexist : false , nameexist : false,idis:"",role:""};
    (async () => {
        const  e = await table.findOne({hemail : req.body.hemail} , function(err,foundit){
            if(err)
                console.log("error : "+err);
            else
            {
                if(foundit)
                {
                    if(foundit.hemail==req.body.hemail)
                    {
                        feed.emailexist=true;
                    }
                }
            }
        })
        const n=await table.findOne({hname : req.body.hname} , function(err,foundit){
            if(err)
                console.log("error : "+err);
            else
            {
                if(foundit)
                {
                    if(foundit.hname==req.body.hname)
                    {
                        feed.nameexist=true;
                    }
                }
            }
        })
            if(feed.nameexist==false && feed.emailexist==false)
            {
                const newTable = new table(req.body);
                newTable.save();
                feed.success=true;
                feed.role=req.body.role;
                feed.idis=req.body.hid;
            }
            //console.log(feed);
            res.send(feed);
    })();
}

module.exports.containornot = function(req,res){
    var feedb = {success: false, role: "",hid:"",name:"",message:"",special:"",gender:""}
    table.findOne({hid : req.body.hid} , function(err,foundit){
        if(err)
            console.log("error : "+err);
        else
        {
            if(foundit)
            {
                if(foundit.hid==req.body.hid){
                    if(foundit.hpassword == req.body.hpassword)
                    {
                        feedb.success=true;
                        feedb.role=foundit.role;
                        feedb.name=foundit.hname;
                        feedb.hid=foundit.hid;
                        feedb.gender=foundit.gender;
                        feedb.special=foundit.special;
                    }
                    else{
                        feedb.message = "invalid email/password";
                    }
                }
            }
            else
            {
                feedb.message = "invalid email/password";
            }

        }
        res.send(feedb);
    }) 
}