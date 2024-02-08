const express=require('express')
const dbconnection=require('./ConnectionDB')

 const app=express()
 app.use(express.json())
 app.post('/update',async(req,res)=>{
                   let data =await dbconnection()
                    let result= await data.updateOne(req.body)
                    res.send(result)
             })
 app.listen(4040)  
