const express = require('express');
const app = express();
var session = require( 'express-session' );
var MongoStore = require( 'connect-mongo' );
const apirouters = require('./backend/routers/apiroutes');
const webrouters = require('./backend/routers/webroutes');
var config = require('./backend/config/config');

app.use(express.static(__dirname+"/frontend"));
require("./connectionmongo");
app.use( session( {
    resave: false,
    saveUninitialized: false,
    secret: config.SESSION_SECRET,
    store: MongoStore.create( {mongoUrl: config.MONGO_CONNECTION_STRING} )
} ) );
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get('/logout',(req,res)=>{
    res.clearCookie('connect.sid')
    req.session.destroy(function (err) {
      res.redirect('/'); //Inside a callback… bulletproof!
     });
  })

app.use('/api',apirouters);
app.use(webrouters);


// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
