const table = require("../models/appointmentmodel");
const doc= require("../models/doctormodel");

module.exports.addnew = function(req,res)
{
    var feedb={existslot : false,foundid:"",docid:"",name:""};
    var sendfeed={success:false,message:"",foundid:"",name:""};
    var a=[];
    (async () => {
        const  f = await doc.findOne({"doctype" : req.body.doctype},function(er,gotitd){
            if(er)
                console.log("error : "+er);
            else{
                if(gotitd){
                    feedb.docid=gotitd.id;
                    feedb.name=gotitd.dname;
                    feedb.foundid=gotitd.did;
                    a=gotitd.dava;
                }
                else{
                    console.log("not found2");
                }
            }
        })
        if(a.length==0)
        {
            doc.findByIdAndUpdate(
                feedb.docid,
                {$push: {"dava":
                {
                    dtime : req.body.time,
                    ddate : req.body.date,
                    pid : req.body.pid,
                    pname: req.body.name
                } 
                }},
                {safe: true, upsert: true},
                function(ser,don){
                    if(ser)
                        console.log(ser);
                }
            )
            sendfeed.success=true;
        }
        else{
            var l=a.length;
            for(i=0;i<l;i++)
            {
                if(a[i].ddate==req.body.date && a[i].dtime==req.body.time){
                feedb.existslot=true;
                sendfeed.message="already exist";
                break;
               }
            }
            if(feedb.existslot==false){
                doc.findByIdAndUpdate(
                    feedb.docid,
                    {$push: {"dava":
                    {
                        dtime : req.body.time,
                        ddate : req.body.date,
                        pid : req.body.pid,
                        pname: req.body.name
                    } 
                    }},
                    {safe: true, upsert: true},
                    function(ser,don){
                        if(ser)
                            console.log(ser);
                    }
                )
                sendfeed.success=true;
            }
        }
            sendfeed.name=feedb.name;
            sendfeed.foundid=feedb.foundid;
            console.log(sendfeed);
    res.send(sendfeed);
           
    })();
}
module.exports.getall = function(req,res)
{
    table.find({},function(er,re){
        if(er)
            console.log(er);
       res.send(re);
    })
}
module.exports.getappo = function(req,res)
{
    table.find({},function(er,re){
        if(er)
            console.log(er);
       res.send(re);
    })
}
module.exports.newsave = function(req,res)
{
    //console.log(req.body);
    var feed={success : false};
    const newTable = new table({
    pname :req.body.name,
    pid:req.body.pid,
    email:req.body.email,
    phonenumber: req.body.phonemunber,
    appointmentdate : req.body.date,
    time : req.body.time,
    doctype : req.body.doctype,
    doctorid:req.body.docid,
    doctorname:req.body.docname
    //userid:req.session._id
    });
    newTable.save();
    feed.success=true;
}
module.exports.userappo = function(req,res)
{
    id=req.params.id;
    table.find({email : id},function(err,found){
        if(err)
            console.log(err);
        else{
           res.send(found);
        }
    })
}