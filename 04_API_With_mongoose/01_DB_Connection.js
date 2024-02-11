const mongoose = require('mongoose');


const main = async ()=> {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/prashant');
        const farmerSchema = new mongoose.Schema({
              name: String
         });
          const farmerModel = mongoose.model('Farmer',farmerSchema);
          let data = new farmerModel({ name: "Pratik"});
          let result = await data.save();    // Wait for the promise to resolve
          console.log(result);
         } catch (error) {
            console.error(error);
        }   
      }  

main()    


