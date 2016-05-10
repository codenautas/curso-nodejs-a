insert, remove y update (no tienen operadores)

db.personas.find({"state":"Indiana"}).count()
db.personas.remove({"state":"Indiana"})
db.personas.insert({"name":"pepe"})
db.personas.remove({}) --> borra los objetos de la colleccion
db.personas.drop() borra la collección
db.drop() borra la base de datos
db.personas.update({query},{operation},{options})

Quiero actualizar todos los objetos para los que el salario es menor que 1200
db.personas.find({salary:{$lte:1200}})
db.personas.update({salary:{$lte:1200}},{}) --> toma PRIMER ELEMENTO personas y le quita el objeto salario
db.personas.update({salary:{$lte:1200}},{$set:{lowSalary:true}},{multi:true})--> multi: true hace que pise a todos, sin eso solo el primero
db.personas.update({salary:{$lte:1200}},{$unset:{lowSalary:true}},{multi:true})

db.personas.update({},{$push:{neighborhoods:"Lugano"}})--> Agrega sin importar que se repita
db.personas.update({},{$push:{neighborhoods:"Lugano"}},{multi:true})
db.personas.update({},{$pop:{neighborhoods:1}})-->quita el último
db.personas.update({},{$addToSet:{neighborhoods:"Lugano"}}) --> Agregar al set no permite que en el set haya dos elementos iguales
db.personas.update({},{$addToSet:{neighborhoods:"Recoleta"}},{multi:true})


Ejemplo de cómo crear una base de datos con Mongo para los Blogs
_id: ObjetoId
name:"el blog de Emilio"
Elijo como quiero que sea mi owner
owner:objectId                        
owner:{_id: objectId
        name:"El blog de Emilio"
      }
CAT:[1,2,......,100]
    {id_cat:1, nombre:"a",link:"http://..."}
    
Collection de posts
{
_id: post_id
title:
link:
blog_id={referencia al blog}
}
{
_id: post_id
title:
link:
blog_id={todo el blog}
}

Conección a mongo a través de nodeJs
mongo_core
mongojs

db.personas.find({},(err,personas)=>{
    personas.forEach(unaPersona=>{
        db.personas.update({_id:unaPersona._id},unaPersona,(err,resulta)=>{
            console.log(err,result);
        })
    })
})