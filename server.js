var express = require("express");
var path = require("path")
var PORT = 2132;
var survey = express()


survey.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"/app/public/home.html"))
})
survey.get("/survey",function(req,res){
    res.sendFile(path.join(__dirname,"/app/public/survey.html"))
})


survey.listen(PORT,function(err){
      if (err) {
          console.log("there was an error")
      } else {
          console.log("server is connected to localhost:"+ PORT+".")
      }
})