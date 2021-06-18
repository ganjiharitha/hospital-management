const mongoose=require('mongoose');
var register=new mongoose.Schema({
   dname:{type:String},
   did:{type:String},
   doctype:{type:String},
   gender:{type:String},
   dava:[
       {
           dtime : {type:String},
           ddate : {type:String},
           pid:{type:String},
           pname:{type:String}
       }
   ],
   pat:[
       {
           pidi:{type:String},
           pname:{type:String},
           pgen:{type:String},
           pgrp:{type:String},
           page:{type:String},
           pdate:{type:String},
           ppast:{type:String},
           pcurr:{type:String},
           proom:{type:String}
       }
   ]
}, {timestamps : true})
var table=mongoose.model('doctor',register);
module.exports=table;