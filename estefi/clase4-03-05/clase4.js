//algoritmo de búsqueda que utiliza mongo btree

db.sistemas.find({salary: {$lt:2000}}).explain({queryPlanner:"executionStats"})

db.personas.find({salary: {$gt:2000}}).explain({queryPlanner:"executionStats"})

      "queryPlanner" : {
              "plannerVersion" : 1,
              "namespace" : "sistemas.sistemas",
              "indexFilterSet" : false,
              "parsedQuery" : {
                      "salary" : {
                              "$lt" : 2000
                      }
              },
              "winningPlan" : {
                      "stage" : "EOF"
              },
              "rejectedPlans" : [ ]
      },
      "executionStats" : {
              "executionSuccess" : true,
              "nReturned" : 0,
              "executionTimeMillis" : 16,
              "totalKeysExamined" : 0,
              "totalDocsExamined" : 0,
              "executionStages" : {
                      "stage" : "EOF",
                      "nReturned" : 0,
                      "executionTimeMillisEstimate" : 0,
                      "works" : 1,
                      "advanced" : 0,
                      "needTime" : 0,
                      "needYield" : 0,
                      "saveState" : 0,
                      "restoreState" : 0,
                      "isEOF" : 1,
                      "invalidates" : 0
              },
              "allPlansExecution" : [ ]
      },
      "serverInfo" : {
              "host" : "sj150",
              "port" : 27017,
              "version" : "3.2.4",
              "gitVersion" : "e2ee9ffcf9f5a94fad76802e28cc978718bb7a30"
      },
      "ok" : 1

      
db.personas.createIndex({salary: 1})
db.sistemas.dropIndex({salary: 1})

{
        "createdCollectionAutomatically" : true,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}

db.setProfilingLevel(0,5)
