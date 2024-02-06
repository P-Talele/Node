// const  {MongoClient}=require('mongodb');
// const url='mongodb://localhost:27017/';
// const database='prashant';
// const client= new MongoClient(url);


// async function getData()
// {
//        let result= await client.connect();
//        let db=result.db(database);
//        let collection=db.collection('inventory');
//        let response=  await collection.find({}).toArray();
//        console.log(response);
// }

// getData()



var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("prashant");
  dbo.collection("inventory").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});