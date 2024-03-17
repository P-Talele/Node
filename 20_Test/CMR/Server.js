require('dotenv').config()
const express =require('express');
const app=express();
const userRoutes=require("./Route/userRoutes");
const PORT=process.env.PORT;
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());


app.use('/users',  userRoutes);  

app.listen(PORT, ()=>{
    console.log("Server is Running on this Post=",PORT)
})