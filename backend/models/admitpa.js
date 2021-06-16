const mongoose=require('mongoose');
var register=new mongoose.Schema({
    pname :{type:String,required : true},
    pid : {type:String,required : true},
    gender :{type:String,required : true},
    bloogd :{type:String,required : true},
    admitdate:{type:String,required : true},
    roonno:{type:String,required : true},
    doctorid:{type:String,required : true},
    doctorname:{type:String,required : true},
    pasthelth:{type:String,required : true},
    currentprob:{type:String,required : true},
    roomnum:{type:Number,required : true},
    roon_id:{type : String},
    room_type : {type : String}
}, {timestamps : true})
var table=mongoose.model('admit',register);
module.exports=table;