"use strict";
/*
const list=["Argentina","Brasil","Uruguay"]; //No es que el array sea estático, es que la referencia no se puede cambiar.
list.push("Chile");

function doAlgo(){
    //A también vive acá

    for(var i=0;i<10;i++){
        var a=1;
    }
    if(){
        let b="hola"  //solo vive dentro del if
    }
}
//Son lo mismo
list.forEach(function(item){
    console.log(item)
}) 

list.forEach( item =>{
    console.log(item)
})
list.forEach(item=>console.log(item));


list.map(function(item){
    return item.toUpperCase()
})
list.map( item => item.toUpperCase())

*/
js=require("mongojs");
const db= mongojs("localhost:27017/sistema","collection")

db.personas.find({},(err,docs)=>{
    console.log.log(err,docs);
    docs.forEach(personas => console.log(persona.company);
})

//Se pueden hacer cursores
var cursor=db.personas.find({});
cursor.forEach()