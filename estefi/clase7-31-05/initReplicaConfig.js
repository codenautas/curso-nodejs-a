rs.initiate( {
   _id: "configReplSet",
   configsvr: true,
   members: [
      { _id: 0, host: "sj150:26050" },
      { _id: 1, host: "sj150:26051" },
      { _id: 2, host: "sj150:26052" }
   ]
} )


rs.initiate( {
   _id: "a",
   members: [
      { _id: 0, host: "sj150:27000" },
      { _id: 1, host: "sj150:27001" },
      { _id: 2, host: "sj150:27002" }
   ]
} )

rs.initiate( {
   _id: "b",
   members: [
      { _id: 0, host: "sj150:27100" },
      { _id: 1, host: "sj150:27101" },
      { _id: 2, host: "sj150:27102" }
   ]
} )


mongos --configdb configReplSet/sj150:26050,sj150:26051,sj150:26052 --logappend --logpath mongos0.log #puerto default 27017
mongos --configdb configReplSet/sj150:26050,sj150:26051,sj150:26052 --logappend --logpath mongos1.log --port 26061
mongos --configdb configReplSet/sj150:26050,sj150:26051,sj150:26052 --logappend --logpath mongos2.log --port 26062
mongos --configdb configReplSet/sj150:26050,sj150:26051,sj150:26052 --logappend --logpath mongos3.log --port 26063