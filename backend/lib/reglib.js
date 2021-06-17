const table = require("../models/regmodel");
module.exports.addnew = function(req,res)
{
    var feed={success : false , emailexist : false , nameexist : false,idis:""};
    (async () => {
        const  e = await table.findOne({email : req.body.email} , function(err,foundit){
            if(err)
                console.log("error : "+err);
            else
            {
                if(foundit)
                {
                    if(foundit.email==req.body.email)
                    {
                        feed.emailexist=true;
                    }
                }
            }
        })
        const n=await table.findOne({name : req.body.name} , function(err,foundit){
            if(err)
                console.log("error : "+err);
            else
            {
                if(foundit)
                {
                    if(foundit.name==req.body.name)
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
                feed.idis=req.body.hid;
            }
            console.log(feed);
            res.send(feed);
    })();
}
module.exports.containornot = function(req,res){
    var feedb = {success: false, role: "",hid:"",name:"",message:""}
    table.findOne({email : req.body.email} , function(err,foundit){
        if(err)
            console.log("error : "+err);
        else
        {
            if(foundit)
            {
                if(foundit.email==req.body.email){
                    if(foundit.password == req.body.password)
                    {
                        feedb.success=true;
                        feedb.role=foundit.role;
                        feedb.name=foundit.name;
                        feedb.hid=foundit.hid;
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