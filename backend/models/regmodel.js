const mongoose=require('mongoose');
var register=new mongoose.Schema({
    email : {
        type : String
    },
    name : {
        type : String
    },
    phonenumber : {
        type : String
    },
    password : {
        type : String
    },
    role : {
        type : String
    },
    address : {
        type : String
    },
    hid : {
        type : String
    },
}, {timestamps : true})
var table=mongoose.model('register',register);
module.exports=table;