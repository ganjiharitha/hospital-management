const express = require('express');
const app = express();

const apirouters = require('./backend/routers/apiroutes');
const webrouters = require('./backend/routers/webroutes');

app.use(express.static(__dirname+"/frontend"));
require("./connectionmongo");

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use('/api',apirouters);
app.use(webrouters);


// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
