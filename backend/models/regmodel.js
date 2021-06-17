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
    role : {
        type : String,
        require : true
    },
    address : {
        type : String,
        required : true
    },
    hid : {
        type : String,
        required : true
    },
}, {timestamps : true})
var table=mongoose.model('register',register);
module.exports=table;