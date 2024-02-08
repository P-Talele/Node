const express=require('express')
const dbconnection=require('./ConnectionDB')

const app=express()
app.use(express.json())
app.delete('/delete',async(req,res)=>{
                  let data =await dbconnection()
                  let result= await data.deleteOne(req.body)
                  res.send(result)
             })

app.listen(3040)  
