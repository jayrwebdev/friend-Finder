var express = require("express");
var path = require("path")
var PORT = process.env.PORT || 2132;
var survey = express()
var bParser = require('body-parser')
var server=require('./routing/apiRoutes.js')


survey.use(express.static(path.join(__dirname,'./app/public')));

survey.use(bParser.json());
survey.use(bParser.urlencoded({extended: true}));
survey.use(bParser.text());

survey.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"./app/public/home.html"))
})
survey.get("/survey",function(req,res){
    res.sendFile(path.join(__dirname,"./app/public/survey.html"))
})
survey.get("/api/friends.js",function(req,res){
   res.sendFile(path.join(__dirname,'./app/data/friends.js'))
})
server(survey)






survey.listen(PORT,function(err){
      if (err) {
          console.log("there was an error")
      } else {
          console.log("server is connected to localhost:"+ PORT+".")
      }
})