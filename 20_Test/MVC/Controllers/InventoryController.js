const  DB_Connection=require('../DB/DB_Connection');

     //  async function getAllData(req, res){
     //   try{
     //            let result=await  DB_Connection();
     //            let data=  await  result.find({}).toArray();
     //            res.send(data);
     //            if(data.length===0)
     //            {
     //               console.log("Data Not Found")
     //            }
     //            }catch(error) {
     //            throw new Error(400,"Data Not Found"+error)
     //       }   
     //  }

   const  getAllData  = async(req, res)=>{
     try{
          let result=await  DB_Connection();
          let data=  await  result.find({}).toArray();
          res.send(data);
          if(data.length===0)
          {
             console.log("Data Not Found")
          }
          }catch(error) {
          throw new Error(400,"Data Not Found"+error)
     }  
         
   }

 
      module.exports =getAllData;
      



 



