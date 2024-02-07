const  {MongoClient}=require('mongodb');
const  client=new MongoClient('mongodb://127.0.0.1:27017')


async function getconnection()
{
         let result= await client.connect();
         let db=result.db('prashant');
         return db.collection('inventory');
           
    } 
getconnection()

getconnection().then((insert)=>{

   
     insert.insertOne({
            item: 'Phone',
            qty: 10,
            size: { h: 8.5, w: 11, uom: 'in' },
            status: 'C'
         })
    

           console.log("Data Insert Succesfullty")
})


