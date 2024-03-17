const  path=require('path') 
require('dotenv').config ( {path:path.resolve(__dirname,"../.env") } );
const mongoose=require('mongoose');
const URL=process.env.URL; 
const  DB_NAME=process.env.DB_NAME;

  const  DB_Connection = async()=>{
             try{
                      const   ConnectionInstance=    await mongoose.connect(`${URL}/${DB_NAME}`);
                      console.log("Data Base Connect Succesfully  !!",ConnectionInstance.connection.host);
               }
                catch(error)
          {
               throw new Error("Data Base Connection  Failed !! ",error);
         } 
   }
  export default DB_Connection;
   

