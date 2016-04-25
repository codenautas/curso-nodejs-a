"use strict"

/**
 * Crear un script que almacene en una collection children todas las personas menores de 18.
 * @type {*|exports|module.exports}
 */


const mongojs = require("mongojs");
//string connection
const db = mongojs("localhost:27017/sistema",["gente","mayors"]);

db.gente.find( { age: {$gt:18} } ,(err,docs) => {

   if(err){
       console.log(err);
   }else{
       db["mayors"].insert(docs,(err,res) => {
           console.log(err,res)
       });
   }
});