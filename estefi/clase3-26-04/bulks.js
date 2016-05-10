"use strict";
var mongojs = require('mongojs');
var db= mongojs("localhost:27017/sistema",["personas"]);

var args = process.argv;
console.log(args);
//argsparser
var bulk=db.personas.initializeOrderedBulkOp();
bulk.find({age:33}).update({$set: {level: 1}})
bulk.find({state:'Texas'}).update({ $set: {materiasAprobadas:10} })
bulk.execute(function(err,res){
    if(err){
        console.log(err)
    }else{
        console.log(res);
    }
})