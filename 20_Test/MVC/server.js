require("dotenv").config()
const   express =require("express");
const  bodyParser=require('body-parser')    
const  InventoryRoute=require("./Routes/inventoryRoutes.js")

const  Port=process.env.PORT;

 const  app=express();
 app.use(bodyParser.json()); 

 app.use("/user/data",InventoryRoute);

 app.listen(Port, function(){
     console.log("server is running on this port="+Port)
})




