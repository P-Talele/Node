require('dotenv').config();
const express= require('express');
const dbconnection=require('./DB_Connection');
const app=express();
const PORT=process.env.PORT;
app.use(express.json())  


app.post('/insert',async (req, res)=>{
      try {
                
                   let data = await  dbconnection();
                   let result = await  data.insertOne(req.body);
                   res.send(result);

        
      } catch (error) {
             console.log(error);
      }
})

app.listen(PORT,()=>{
        console.log("Server is Runnign   on this port="+PORT)
})
