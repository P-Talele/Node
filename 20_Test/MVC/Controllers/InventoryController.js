
const  DB_Connection=require('../DB/DB_Connection');

      async function getAllData(req, res){
       try{
                let result=await  DB_Connection();
                let data=  await  result.find({}).toArray();
                res.send(data);
                }catch(error) {
                throw new Error(400,"Data Not Found"+error)
           }
      }

      module.exports =getAllData
      



 



