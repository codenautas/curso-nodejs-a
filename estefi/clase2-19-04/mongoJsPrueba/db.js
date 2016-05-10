"use strict";

const mongojs = require("mongojs");
//ELIGIR CADA UNA SU BASE Y SU COLLECCION
const db = mongojs("localhost:27017/sistemasGente",["personas"]);

var contador = {};

//Cuando tiene callback, devuelve todos los documentos juntos. 
db.personas.find({}, (err,docs) => {
    if(err){
        console.log("no me puedo conectar a la db",err);
    }else{
        docs.forEach( persona => {
            if( contador[persona.company] ){
                contador[persona.company]++;
            }else{
                contador[persona.company] = 1;
            }
            
            console.log(contador);
        } );
    }

});

var cursor = db.personas.find();
cursor.forEach( (err,persona) => {
    if(err){
        console.log("no me puedo conectar a la db",err);
    }else{
        if(persona != null){
            console.log(persona.company);
        }
    }
} );