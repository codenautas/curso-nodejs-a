"use strict";

/**
 * Crear un script que se conecte a mongodb
 * y agregue una propiedad fullName
 * a todas las personas utilizando
 * nombre y apellido.
 **/

const mongojs = require("mongojs");
//string connection
const db = mongojs("localhost:27017/sistema",["gente"]);


db.gente.find({},(err,docs) => {
    if(err){
        console.log(err);
    }else{
        docs.forEach( persona => {
           let fullName = persona.name.last+", "+persona.name.first;
            db.gente.findAndModify({
                query: { _id: persona._id },
                update: { $set: { fullName: fullName } },
                new: true
            },  function (err, doc, lastErrorObject) {
                console.log(err,doc,lastErrorObject);
            })
        });
    }
});


