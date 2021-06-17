const mongoose=require('mongoose');
var register=new mongoose.Schema({
   dname:{type:String,required : true},
   did:{type:String,required : true},
   doctype:{type:String,required : true},
   gender:{type:String,required : true},
   dava:[
       {
           dtime : {type:String},
           ddate : {type:String},
           pid:{type:String},
           pname:{type:String}
       }
   ],
   pat:[
       {pidi:{type:String}}
   ]
}, {timestamps : true})
var table=mongoose.model('doctor',register);
module.exports=table;