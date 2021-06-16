const express = require('express');
const path = require('path');
const webRouter = express.Router();
const htmlbase = path.join(__dirname, "../../frontend/allhtmlfiles");



webRouter.get('/',function(req, res){
    res.sendFile(path.join(htmlbase, "homep.html"));
})
webRouter.get("/login", function(req, res){
    res.sendFile(path.join(htmlbase, "loginpage.html"));
})
webRouter.get("/register", function(req, res){
   res.sendFile(path.join(htmlbase, "registerpage.html"));
})
webRouter.get("/admin", function(req, res){
    res.sendFile(path.join(htmlbase, "admin.html"));
 })
 webRouter.get("/adminreg", function(req, res){
    res.sendFile(path.join(htmlbase, "adminreg.html"));
 })
 webRouter.get("/appointment", function(req, res){
    res.sendFile(path.join(htmlbase, "appoitment.html"));
 })



module.exports = webRouter;