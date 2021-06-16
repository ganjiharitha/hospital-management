const mongoose=require('mongoose');
var register=new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    phonenumber : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    docavailable:{
        type : Number,
        required :true
    }

}, {timestamps : true})
var table=mongoose.model('admindb',register);
module.exports=table;