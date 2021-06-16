const mongoose=require('mongoose');
var register=new mongoose.Schema({
    role : {
        type : String,
        require : true
    },
    hemail : {
        type : String,
        required : true
    },
   hname : {
        type : String,
        required : true
    },
    hpnum : {
        type : String,
        required : true
    },
    hpassword : {
        type : String,
        required : true
    },
    haddress : {
        type : String,
        required : true
    },
    hid : {
        type : String,
        required : true
    },

}, {timestamps : true})
var table=mongoose.model('admindb',register);
module.exports=table;