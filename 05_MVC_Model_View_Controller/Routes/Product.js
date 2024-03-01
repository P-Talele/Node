c
const express=require('express')
const route=express.Router()

route.routes("/").get(getAllProduct);
route.routes("/testing").get(getAllProductTesting)

module.exports=route  


