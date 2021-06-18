const table = require("../models/doctormodel");
module.exports.addnew = function(req,res)
{
    var feed={success : false};
    const newTable = new table(req.body);
    newTable.save();
    feed.success=true;
    res.send(feed);
}
module.exports.getall = function(req,res)
{
    
    var id =req.params.id;
    table.find({did : id},function(er,re){
        if(er)
            console.log(er);
        else{
            var appoint={};
            appoint=re[0].dava;
        }
       res.send(appoint);
    })
}
/*
module.exports.deleteop = function(req,res){
    table.findOneAndUpdate(req.body.hid, { $pull: { dava: { _id: req.body.deleteid } } }, (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'error in deleting address' });
        }
    
        res.json(data);
    });
    
}*/
module.exports.getdoc = function(req,res)
{
    
    var id =req.params.id;
    table.find({doctype : id},function(er,re){
        if(er)
            console.log(er);
        else{
            var appoint={"docid":"","doctorname":""};
            appoint.docid=re[0].did;
            appoint.doctorname=re[0].dname;
        }
       res.send(appoint);
    })
}
module.exports.getalldoc = function(req,res)
{
    table.find({},function(er,re){
        if(er)
            console.log(er);
       res.send(re);
    })
}
module.exports.getallappo = function(req,res)
{
    var id =req.params.id;
    table.find({did : id},function(er,re){
        if(er)
            console.log(er);
        else{
            var appoint={};
            appoint=re[0].dava;
        }
       res.send(appoint);
    })
}
module.exports.getalladmit = function(req,res)
{
    var id =req.params.id;
    table.find({did : id},function(er,re){
        if(er)
            console.log(er);
        else{
            var appoint={};
            appoint=re[0].pat;
        }
       res.send(appoint);
    })
}
