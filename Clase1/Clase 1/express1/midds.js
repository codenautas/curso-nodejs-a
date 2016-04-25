"use strict";

var express = require("express");
var app = express();

var capitalLetter = require("./lib/capital");
var addHello = require("./lib/addhello");

app.use(capitalLetter);
app.get("/hello/:name",[addHello,function(req,res,next){
	res.send(req.params.name);
}]);

app.listen(3000,function(){
	console.log("SERVER UP");
})