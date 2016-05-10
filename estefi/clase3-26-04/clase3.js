"use strict";

var personLib=require("./personLib");
/*personLib.getPersonByAge(33,function(err,person){
    if(err){
        console.log(err)
    }else{
        console.log(person);
    }
})*/
/*
personLib.getPersonById("571f774bfae4bdaa026e8336",function(err,persona){
    if(err){
        console.log(err)
    }else{
        console.log(persona);
    }
})
*/
/*
personLib.getPersonWhoWorkAndStudy(function(err,persona){
    if(err){
        console.log(err);
    }else{
        console.log(persona);
    }
});
*/

personLib.countPersonsInCity('Texas',function(err,persona){
    if(err){
        console.log(err);
    }else{
        console.log(persona);
    }
})
/*
personLib.setAge("571fa3ed39f914860288764f",35,function(err,persona){
    if(err){
        console.log(err)
    }else{
        console.log(persona)
    }
})*/