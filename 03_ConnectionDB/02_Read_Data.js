const  {MongoClient}=require('mongodb');
const  client=new MongoClient('mongodb://127.0.0.1:27017')


async function getData()
{
     
        let result= await client.connect();
        let db=result.db('prashant');
        let collection=db.collection('inventory');
        let response=  await collection.find({}).toArray();
        console.log(response);
        await client.close()
     
} 
getData()