const mongoose = require('mongoose');
const confedencial = require("./backend/config/config");


const pass = confedencial.mongopass;
const login =confedencial.mongologin;

var connectionString="mongodb+srv://"+login+":"+pass+"@cluster0.olxkm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false,useCreateIndex : true});

mongoose.connection.on('connected',function()
{
    console.log("Database connected");
});
