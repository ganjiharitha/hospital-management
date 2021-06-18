const doc= require("../models/doctormodel");
const admit= require("../models/admitpa");
module.exports.addnew = function(req,res)
{
    var feed={success : false};
    const newTable = new admit(req.body);
    newTable.save();
    feed.success=true;
    doc.findOneAndUpdate(
        {"doctype":req.body.doctyde},
        {$push: {"pat":
        {
            pidi:req.body.pid,
            pname:req.body.pname,
           pgen:req.body.gender,
           pgrp:req.body.bloogd,
           page:req.body.age,
           pdate:req.body.admitdate,
           ppast:req.body.pasthelth,
           pcurr:req.body.currentprob,
           proom:req.body.roomnum
        } 
        }},
         {safe: true, upsert: true},
        function(ser,don){
        if(ser)
        console.log(ser);
        }
        )
    res.send(feed);
}
module.exports.getpat = function(req,res)
{
    admit.find({},function(er,re){
        if(er)
            console.log(er);
       res.send(re);
    })
}
