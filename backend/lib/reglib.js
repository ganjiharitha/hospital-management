const table = require("../models/regmodel");
module.exports.addnew = function(req,res)
{
    var feed={success : false , emailexist : false , nameexist : false};
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
                const newTable = new table({
                    name : req.body.name,
                    email :req.body.email,
                    phonenumber : req.body.phonenumber,
                    password : req.body.password  
                })
                newTable.save();
                feed.success=true;
            }
            console.log(feed);
            res.send(feed);
    })();
}
module.exports.containornot = function(req,res){
    var feedb = {success: false, message: "", user: "",glog:false }
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
                        feedb.user=foundit.name;
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