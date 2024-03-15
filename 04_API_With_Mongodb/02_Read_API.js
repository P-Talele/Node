const express=require('express')
const dbconnection=require('./ConnectionDB')
const app=express()


app.get('/getdata',async(req,res)=>{
           let data=  await dbconnection()
           data=await data.find().toArray();
           res.send(data)
});
app.listen(1010)    
  
 



