const {MongoClient}=require('mongodb')
const client =new  MongoClient('mongodb://127.0.0.1:27018', function(err,db){
    if(err) throw err
    {
                console.log("connection Createed Successfully")
                db.close()
    } 
 });