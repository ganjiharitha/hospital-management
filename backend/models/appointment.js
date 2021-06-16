const mongoose=require('mongoose');
var register=new mongoose.Schema({
    pname :{type:String,required : true},
    pid: {type:String,required : true},
    email:{type:String,required : true},
    phonenumber:{type:String,required : true}, 
    appointmentdate : {type:String,required : true},
    time : {type:String,required : true},
    typeofdoc : {type:String,required : true},
    isdone:{type:Boolean,required : true},
    cancelit:{type:String,required : true}

}, {timestamps : true})
var table=mongoose.model('appoitment',register);
module.exports=table;