Consultar todas las personas con género masculino

Consultar todas las personas que tengan número de teléfono ($exists)

dbs.personas.find( { "phone": { $exists: true } })

Consultar todas las personas que trabajan


Contar cuantas personas mayores de 50 años estudian y trabajan, ordenar por salary.

db.personas.find({ "age": {$gt: 50}, "worker": true, "student":true}).sort({ salary : -1 })

1)Consultar todas las personas con género masculino
db.personas.find({"gender":"male"});
2)Contar todas las personas con género masculino.
db.personas.find({"gender":"male"}).count()
3)Consultar todas las personas que tengan número de teléfono ($exists)
db.personas.find( { "phone": { $exists: true } })
4)Consultar todas las personas que trabajan
db.personas.find({"worker":true});
5)Consultar todas las personas que estudian
db.personas.find({"student":true});
6)Consultar todas las personas que trabajan y estudian
db.personas.find({"worker": true, "student":true})
7)Consultar todas las personas mayores de 18 años.
db.personas.find({ "age": {$gt: 50}})
8)Consultar todas las personas de genero femenino.
db.personas.find({"gender":"female"})
9)Consultar todas las personas mayores de 18 años y de género femenino. ($gte)
db.personas.find({"age":{$gt:18},"gender":"female"})
10)Consultar todas las personas mayores de 18 años y de género masculino, devolver sólo su nombre.
db.personas

db.personas.find({$and:[{age:{$gt:18}},{gender:"male"}]},FILTRO)
find({$or:[{state:"california"},{state:"New York"}],{age:1}})