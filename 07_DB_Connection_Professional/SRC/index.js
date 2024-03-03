const Mongoose= require('mongoose')
//import {DB_NAME} from  "./constants.js"
const DB_URL="mongodb://127.0.0.1:27017/"
const DB_NAME="prashant"
const express= require('express')
const app=express()
 async function   ConnectionDB()
{
   try {
       const success=await  Mongoose.createConnection(DB_URL/DB_NAME)
          console.log("Connection Succfully connected",success)
               app.on("error",(error)=>{
               console.log("errr",error);
               throw error;
          })
    
        //      app.listen(process.env.PORT, ()=>{
        //    console.log("App listen on this port ",process.env.PORT)
        // });

        
    
      } catch (error) {
       console.log("Error",error)
     }
}
ConnectionDB ()