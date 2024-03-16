const express =require('express');
const router = express.Router();
const {Inventory}=require('../Controllers/InventoryController.js');

 router.get("/",Inventory);

module.exports=router;  


