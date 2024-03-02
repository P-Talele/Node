const mongoose= require('mongoose')
import {DB_NAME} from  "./constants"
const express= require('express')
const app=express()

 async function   ConnectionDB()
{
   try {
      await  mongoose.connect('${process.env.MONGODB_URL}/${DB_NAME}')
     app.on("error",(error)=>{
          console.log("errr",error);
          throw error;
     })
    
     app.listen(process.env.PORT, ()=>{
      console.log("App listen on this port ${process.env.PORT}")
     });
    
   } catch (error) {
      console.log("Error",error)
    }
}
ConnectionDB()