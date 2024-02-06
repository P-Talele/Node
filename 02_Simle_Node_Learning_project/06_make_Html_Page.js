const express=require('express')                      // import express js
const path= require('path')                            // import path module

 const app=express()
 const filepath=path.join(__dirname,'01_Public')           
 app.use(express.static(filepath)) 
 app.listen(2020)