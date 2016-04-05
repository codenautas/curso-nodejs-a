var express = require("express");

var app = express();

app.get("/app.js",[function(req,res,next){
	console.log("estoy checkeando algo");
	next();
},function(req,res,next){
	res.send("no es app.js");
}])

app.use(express.static('public'));

app.listen(3000,function(){
	console.log("SERVER UP");
})