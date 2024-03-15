const {mongoose} = require('mongoose');

 const url="mongodb://127.0.0.1:27017";
 const DB_NAME="prashant";    

const Db_Connection = async()=>{
         try{
                   const connect=   await   mongoose.connect(url,{
                   dbName: DB_NAME,
                   useNewUrlParser: true,
                   useUnifiedTopology: true
           });
                  console.log("Db Connect !!",connect.connection.host)  
              }   catch(error)
              {
                   console.log("connection Faield ",error);
                   process.exit(1);
               }  

         }

module.exports=Db_Connection;  