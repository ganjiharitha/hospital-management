const mongoose=require('mongoose');
var register=new mongoose.Schema({
    role : {
        type : String
    },
    hemail : {
        type : String
    },
   hname : {
        type : String
    },
    hpnum : {
        type : String
    },
    hpassword : {
        type : String
    },
    haddress : {
        type : String
    },
    hid : {
        type : String
    },
    special : {
        type : String
    },
    gender :{
        type : String
    },

}, {timestamps : true})
var table=mongoose.model('admindb',register);
module.exports=table;