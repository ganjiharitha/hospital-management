const table = require("../models/appointmentmodel");
const doc= require("../models/doctormodel");
module.exports.addnew = function(req,res)
{
    var feedb={existslot : false,foundid:"",docid:""};
    var sendfeed={succes:false,message:""};
    var a=[];
    (async () => {
            const  f = await doc.findOne({"doctype" : req.body.doctype},function(er,gotitd){
                if(er)
                    console.log("error : "+er);
                else{
                    if(gotitd){
                        feedb.docid=gotitd.id;
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
    res.send(sendfeed);
           
    })();
}