mkdir a0
mkdir a1
mkdir a2
mkdir b0
mkdir b1
mkdir b2

mkdir cfg0
mkdir cfg1
mkdir cfg2

mongod --configsvr --replSet configReplSet --port 26050 --dbpath cfg0 --logappend --smallfiles --oplogSize 50 --logpath cfg0.log
mongod --configsvr --replSet configReplSet --port 26051 --dbpath cfg1 --logappend --smallfiles --oplogSize 50 --logpath cfg1.log
mongod --configsvr --replSet configReplSet --port 26052 --dbpath cfg2 --logappend --smallfiles --oplogSize 50 --logpath cfg2.log





mongod --shardsvr --replSet a --dbpath a0 --logpath a0.log --port 27000 --logappend --smallfiles --oplogSize 50
mongod --shardsvr --replSet a --dbpath a1 --logpath a1.log --port 27001 --logappend --smallfiles --oplogSize 50
mongod --shardsvr --replSet a --dbpath a2 --logpath a2.log --port 27002 --logappend --smallfiles --oplogSize 50

/*
--shardsvr --replSet // Va a ser un shard y un replica set
--smallfile comprime los archivos de cierta forma y acorta el tamaño de los archivos de la base
--oplog collecction que tiene todas las operaciones de la réplica
oplogSize le digo que sea de 50 mega
*/
mongod --shardsvr --replSet b --dbpath b0 --logpath b0.log --port 27100 --logappend --smallfiles --oplogSize 50
mongod --shardsvr --replSet b --dbpath b1 --logpath b1.log --port 27101 --logappend --smallfiles --oplogSize 50
mongod --shardsvr --replSet b --dbpath b2 --logpath b2.log --port 27102 --logappend --smallfiles --oplogSize 50


mongos --configdb configReplSet/sj150:26050,sj150:26051,sj150:26052 --logappend --logpath mongos0.log 
#puerto default 27017
mongos --configdb configReplSet/sj150:26050,sj150:26051,sj150:26052 --logappend --logpath mongos1.log --port 26061
mongos --configdb configReplSet/sj150:26050,sj150:26051,sj150:26052 --logappend --logpath mongos2.log --port 26062
mongos --configdb configReplSet/sj150:26050,sj150:26051,sj150:26052 --logappend --logpath mongos3.log --port 26063


mongoimport --port 27000 --db sistemas -c personas --file gente.json --jsonArray


sh.addShard("a/sj150:27000")
sh.addShard("b/sj150:27100")
sh.status()

HABILITA A LA DB COMO SHARDEABLE
sh.enableSharding("sistemas")

sh.shardCollection("sistemas.personas",{_id:1},true) //namespace collection, shard key, true o false si es unique

for(var i =0; i< 100000;i++){
   db.personas.insert({x:i,y:3,z:"test                    bigger"})
}

db.personas.stats()