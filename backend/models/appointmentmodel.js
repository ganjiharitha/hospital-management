const mongoose=require('mongoose');
var register=new mongoose.Schema({
    pname :{type:String},
    pid: {type:String},
    email:{type:String},
    phonenumber:{type:String}, 
    appointmentdate : {type:String},
    time : {type:String},
    doctype : {type:String},
    doctorid:{type:String},
    doctorname:{type:String},
}, {timestamps : true})
var table=mongoose.model('appoitment',register);
module.exports=table;