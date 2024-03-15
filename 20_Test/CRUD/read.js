//require('dotenv').config();
const express=require('express');
const dbconnection=require('./DB_Connection.js');
const app=express();
const PORT=process.env.PORT;


app.get('/getuser',async (req,res)=>{
               let data =await dbconnection();
               data=  await  data.find().toArray();
               res.send(data)
})

  app.listen(PORT,()=>{
      console.log("Server is  Running on port=",PORT)
  })