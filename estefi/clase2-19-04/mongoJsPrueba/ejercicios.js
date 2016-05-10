"use stric"

const mongojs = require("mongojs");
const db = mongojs("localhost:27017/sistemasGente",["personas"]);

mongoimport --db sistemas -c personas --file gente.json --jsonArray

db.personas.find({},(err,personas)=>{
    personas.forEach(persona =>{
        db.personas.findAndModify({query:{_id:persona._id},update:{fullName:persona.name+''+persona.lastName}},function (err,doc,lastErrorObject){
            console.log(err,doc,lastErrorObject);
        });
    })
})

db.personas.update({query},{operation},{options})
db.personas.update({_id:persona._id}, {fullName:""})//Esto pisa con fullname a todas las propiedades. FULL UPDATE

/*
db.mycollection.findAndModify({
    query: { name: 'mathias' },
    update: { $set: { tag: 'maintainer' } },
    new: true
}, function (err, doc, lastErrorObject) {
    // doc.tag === 'maintainer'
})*/
db.personas.find({},(err,personas)=>{
    personas.forEach(persona =>{
        db.personas.findAndModify({query:{_id:persona._id},update:{$set:{fullName:persona.name+' '+persona.lastName}}},function (err,doc,lastErrorObject){
            console.log(err,doc,lastErrorObject);
        });
    });
})
db.personas.update({},{},{});
db.personas.update({},{ $set:{   } },{});

db.personas.update({_id:persona._id}, {$set:{fullName:persona.name+' '+persona.lastName}})