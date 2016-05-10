"use strict";
var mongojs = require('mongojs');
var db= mongojs("localhost:27017/sistema",["personas"]);



function Person(){

    function miAux(){
    }

    return {
        getPersonById:function(id,cb){
            db.personas.findOne({_id:mongojs.ObjectId(id)},cb);
        },
    //getPersonByAge
        getPersonByAge(age,cb){
            db.personas.findOne({age:age},cb);
        },
    //getPersonByGender
        getPersonByGender:function(gender, cb){
            db.personas.find({gender:gender},cb);
        },
        getPersonWhoWork:function(){
            db.personas.find({worker:true})
        },
        getPersonWhoStudy:function(){
            db.personas.find({student:true})
        },
        getPersonWhoWorkAndStudy:function(cb){
            db.personas.find({$and:[{student:true},{worker:true}]}).limit(2,cb);
        },
        countPersonsInCity:function(state,cb){
            db.personas.find({state:state}).count(cb);
        },
        setAge:function(id,age,cb){
            db.personas.update({_id:mongojs.ObjectId(id)},{$set:{age:age}},cb);
        }
        /*
        



updatePerson

setAge(person_id,age)
setGender(person_id,gender)
removePersonById

        */
    }
} ;

module.exports = new Person();