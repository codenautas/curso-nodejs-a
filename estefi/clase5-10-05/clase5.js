//dev.twitter.com
"use strict";

var express =require("express");
var app = express();
var utils=require('./lib/utils');
var mongojs = require('mongojs');
var db= mongojs("localhost:27017/sistemas",["usuarios"]);

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

//La session es un middleware
app.use(session({
    secret: 'anitalavalatina',
    store: new MongoStore({
        url:"mongodb://localhost:27017/gcba",
        ttl: 60 //60 Segundos
    })
}));



app.get("/signup",function(req,res){

});

app.get("/login/:text",function(req,res){
    var parametro=req.params.text;
    
    var test=utils.encrypt(parametro);
    res.send(test);
});

app.listen(3031,function(){
    console.log("Server up en puerto:3031");
});

//db.usuarios.insert({user:"tester",password:"7110eda4d09e062aa5e4a390b0a572ac0d2c0220"})