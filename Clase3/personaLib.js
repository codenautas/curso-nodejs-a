"use strict";



module.exports = {

    getPersonById(id,cb){
        db.gente.find({_id:id},(err,person) => {
            if(err){
                cb(err,null);
            }else{
                cb(null,person);
            }
        });
    },

};