
var express=require("express")
var app = express();
var personLib=require("./personLib");

app.get('/persona/:id',function(req,res){
    personLib.getPersonById(req.params.id,function(err,person){
        if(err){
            console.log(err)
            res.json("ocurrió un error")
        }else{
            console.log(person);
            res.json(person);
        }
    }); 
})

app.listen(3000,function(err,port){
    console.log("levantó")
})