"use strict";

/**
 * Crear un script que se conecte a mongodb
 * y cree una nueva collection mujeres,
 * en ella almacenar
 * todas las mujeres de la collection personas.
 **/

const mongojs = require("mongojs");
//string connection
const db = mongojs("localhost:27017/sistema",["gente","mujeres"]);

db.gente.find({gender:"female"},(err,docs)=>{
   if(err){
       console.log(err);
   }else{
       db.mujeres.insert(docs,(err,docs)=>{
           console.log("Inserto todo ",err,docs);
       });
   }
});
