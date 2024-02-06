const express= require('express');
const path= require('path');

const app=express()
const getpath=path.join(__dirname,'1_Public')
 //app.use(express.static(getpath))

         app.get('',(req,res)=>{
         res.sendFile('${getpath}/about.html');
        });
app.listen(3050) 
