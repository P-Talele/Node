require('dotenv').config();
const {MongoClient, Collection}=require('mongodb')
const URL=process.env.URL;
const DB_Name=process.env.DB_Name;
const Collection_NAME=process.env.COLLECTION_NAME;

const client =new MongoClient(URL)

  async function DB_Connection()
    {
         let con= await  client.connect();
         let  db=  con.db(DB_Name); 
         return  db.collection(Collection_NAME);  
    }
 module.exports=DB_Connection;  