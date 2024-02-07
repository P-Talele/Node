const  {MongoClient}=require('mongodb');
const  client=new MongoClient('mongodb://127.0.0.1:27017')


async function getconnection()
{
           let result= await client.connect();
          let db=result.db('prashant');
          return db.collection('inventory');
           
    } 
getconnection()                                                // Delete One Row 

      getconnection().then((Intem)=>{
      Intem.deleteOne({item: 'Phone'})
      console.log("Delete SuccessFully")
      
})