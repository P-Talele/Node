const  {MongoClient}=require('mongodb');
const  client=new MongoClient('mongodb://127.0.0.1:27017')




async function getconnection()
{
     
         let result= await client.connect();
         let db=result.db('prashant');
         return db.collection('inventory');
           
    
     
} 
getconnection()
 getconnection().then((res)=>{                                             // Using Promise     for get one Collection from Database

                  res.find({qty: 50}).toArray().then((data)=>{
                  console.log(data)
         })
  })

  getData()
 getData().then((res)=>{                                              // Using Promise   for get All Data from Databases

                  res.find({}).toArray().then((data)=>{
                  console.log(data)
         })
  })


