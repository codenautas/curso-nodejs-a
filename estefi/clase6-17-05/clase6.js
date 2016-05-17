//Replicas

1) mkdir rs0 rs1 rs2


2)
mongod --replSet "repl" --dbpath=rs0 --port 27030
mongod --replSet "repl" --dbpath=rs1 --port 27031
mongod --replSet "repl" --dbpath=rs2 --port 27032
3)
rs.initiate({
   "_id" : "repl",
   "version" : 1,
   "members" : [
      {
         "_id" : 0,
         "host" : "127.0.0.1:27030"
      },
      {
         "_id" : 1,
         "host" : "127.0.0.1:27031"
      },
      {
         "_id" : 2,
         "host" : "127.0.0.1:27032",
         "arbiterOnly": true
      }
   ]
})

4)
mongo --port 27031
rs.slaveOk()

5)
mongoimport --port 27030 --db sistemas -c personas --file gente.json --jsonArray

//Muestra qué instancia es primaria, secundaria, etc.
rs.status() 

/*
db.help()
rs.help()
*/
6) Me copié la aplicación de la clase 3 y le puse el nuevo connection string para que lea de cualquiera de las réplicas:
var db= mongojs("localhost:27030,localhost:27031,localhost:27032/sistemas?slaveOk=true&readPreference=primary",["personas"]);
var db= mongojs("localhost:27030,localhost:27031,localhost:27032/sistemas?slaveOk=true&readPreference=secondary",["personas"]);