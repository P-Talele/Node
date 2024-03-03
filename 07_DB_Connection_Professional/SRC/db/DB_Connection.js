const  mongoose=require('mongoose')
import {DB_NAME} from '../constants'

const Db_Connection = async ()=>{

    try {
     const DB_URL=process.env.DB_URL
      const connectionInstance=   await  mongoose.connect(DB_URL/DB_NAME)
      console.log('\n Mongodb Connected  !! on host',connectionInstance.connection.host)
    
      } catch (error) {
         console.log("Mongodb Connection ERROR",error)
         process.exit(1)
       }

}

export default Db_Connection