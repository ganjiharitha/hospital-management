const mongoose=require('mongoose');
var register=new mongoose.Schema({
    status:{type:Boolean,default:true,required:true},
    roomno:{type:Number},
    roon_id:{type : String},
    room_type : {type : String},
    room_cost : {type : String}

}, {timestamps : true})
var table=mongoose.model('room',register);
module.exports=table;