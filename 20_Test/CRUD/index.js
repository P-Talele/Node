require('dotenv').config();
const  express =require('express');
const  app=express();
     
const  port=process.env.PORT;  

app.get('/user',(req, res)=>{
     res.send("Welcome to Surat");
     req.body
})
app.listen(port,()=>{
     console.log("server  is  running  on port=",port)
})        




//  require('dotenv').config(); 
// const  express  = require('express')
// const port=process.env.port;
// const app=express()

//  app.get("/user",(req, res)=>{
//        res.send("hi prashant");
//   })
//  app.listen(port,()=>{
//       console.log('server is runnig on port  number =',port)
//   })


   
   