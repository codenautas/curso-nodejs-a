//db.personas.update({ salary: {$lte:1200} }, { $unset: {lowSalary:true} },{multi:true})

"use strict";

const mongojs = require("mongojs");

const db = mongojs("localhost:27017/sistema",["personas"]);

var contador = {};

db.personas.find({},(err,docs) => {
    //console.log(err,docs);

    docs.forEach( persona => {
        if(contador[persona.company]){
            contador[persona.company]++;
        }else{
            contador[persona.company] = 1;
        }
    });

    //console.log(contador);
});

var cursor = db.personas.find({});
cursor.forEach( (err,unaPersona) => {
    //console.log(unaPersona);
    if(unaPersona != null){
        console.log(unaPersona.company);
    }
});


db.personas.find({}, (err,personas) => {
    personas.forEach( unaPersona => {

        unaPersona.fullName = unaPersona.name.first+", "+unaPersona.name.last;

        db.personas.update( {_id: unaPersona._id}, unaPersona , (err,result) =>{
            console.log(err,result);
        });

    });
});


