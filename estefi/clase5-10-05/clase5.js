//dev.twitter.com
"use strict";

var express =require("express");
var app = express();
var utils=require('./lib/utils');
var mongojs = require('mongojs');
var db= mongojs("localhost:27017/sistemas",["usuarios"]);
var bodyParser=require('body-parser');

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

app.use(bodyParser.json());
//probar con localhost:3031/login/tester/1234
// En la base de datos sistemas de antes agregué:
// db.usuarios.insert({user:"tester",password:"7110eda4d09e062aa5e4a390b0a572ac0d2c0220"})
app.get("/login/:usuario/:pwd",function(req,res){
    var usuario=req.params.usuario;
    var pwd=req.params.pwd;
    var pwd=utils.encrypt(pwd);
   
    db.usuarios.findOne({user:usuario,password:pwd},function(err,usuario){
        console.log(err,usuario);
        if(err){
            res.json(err);
        }else{
            res.json(usuario);
        }
    });
});
app.post("/login",function(req,res){
    var usuario=req.body.usuario;
    var pwd=req.body.pwd;
    var pwd=utils.encrypt(pwd);
   
    db.usuarios.findOne({user:usuario,password:pwd},function(err,usuario){
        console.log(err,usuario);
        if(err){
            res.json(err);
        }else{
            if(usuario){
                req.session.usuario=usuario;
                
            }
            res.json(usuario);
        }
    });
});
//res.redirect('/visitas')
/*
app.get("/visitas",function(req,res){
    res.json(req.session.count);
});
*/
app.listen(3031,function(){
    console.log("Server up en puerto:3031");
});

//db.usuarios.insert({user:"tester",password:"7110eda4d09e062aa5e4a390b0a572ac0d2c0220"})