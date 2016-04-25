var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());

//endpoint
app.get("/",function(req,res,next){
	res.send("Hola Express!!!");
});

app.get("/saludar/:name",function(req,res,next){
	res.send("hola "+req.params.name);
})

app.get("/getItemById",function(req,res,next){
	res.send("ITEM"+req.query.id);
});


app.post("/",function(req,res,next){
	var data = req.body;
	res.send("VA POR POST");
});

//GET //POST

app.listen(3000,function(){
	console.log("SERVER UP");
})