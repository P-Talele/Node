const express=require('express')
const dbconnection=require('./ConnectionDB')

const app=express()

app.use(express.json())

app.post('/post',async(req,res)=>{
                 let data =await dbconnection()
                 let result= await data.insertOne(req.body.json)
                  res.send(result)
         })

    app.listen(3030)
