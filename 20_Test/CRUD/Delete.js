require('dotenv').config();
const express = require('express');
const app=express();
const PORT=process.env.PORT;
const DB_Connection=require('./DB_Connection');



app.delete("/delete", async(req, res)=>{
   try {
           const item  = req.params.item;
          
            const    db = await DB_Connection();
            const    d=   await  db.deleteOne({_item:item});
            const result=  res.send(d); 
         
             if(result===1)
           {
              console.log("one user Deleted Succesfully");
            }else{
               console.log("user not Deleted")
            }
        
      } catch (error) {

        console.log("Something Wrong"+error)
     }        
})

 app.listen(PORT,()=>{
       console.log("server is Running on this Port"+PORT)
 })
