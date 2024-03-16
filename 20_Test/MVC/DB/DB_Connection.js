
 const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const  {MongoClient,collection}=require('mongodb');
const  URL=process.env.URL;
const  DB_Name=process.env.DB_Name
const  COLLECTION_NAME=process.env.COLLECTION_NAME;
const  Connection=  new  MongoClient(URL);

   async function DB_Connection()
{
   try {
          
                   let      con      =    await   Connection.connect();
                   let      db       =    con.db(DB_Name); 
                   return db.collection(COLLECTION_NAME);

            }       catch (error){
                   throw new Error(500,"Server Error",error);
          }
     } 

module.exports=DB_Connection;