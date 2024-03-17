const express =require('express');
const router = express.Router();
const {Inventory}=require('../Controllers/InventoryController.js');

const  handleInventoryRequest = (req, res, next) => {
    // Call the Inventory controller function here
       Inventory(req, res, next);
 };    
router.get("/",()=>{handleInventoryRequest});
module.exports=router;   


