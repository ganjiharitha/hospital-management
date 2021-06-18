const mongoose=require('mongoose');
var register=new mongoose.Schema({
    pname :{type:String},
    pid : {type:String},
    pemail : {type:String},
    pnum : {type:String},
    gender :{type:String},
    bloogd :{type:String},
    admitdate:{type:String},
    doctyde:{type:String},
    doctorid:{type:String},
    doctorname:{type:String},
    pasthelth:{type:String},
    currentprob:{type:String},
    roomnum:{type:String},
    age:{type:String}
}, {timestamps : true})
var table=mongoose.model('admit',register);
module.exports=table;