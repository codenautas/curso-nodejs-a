"use strict"
const mongojs=require("mongojs");

var db=mongojs("localhost:40000/autos",["models"]);

db.models.insert({ "name":"astra" }, function(err,res){
    console.log(err,res);
});