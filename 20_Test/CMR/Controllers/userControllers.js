const {User}=require("../Model/userModel.js");


exports.getAllUsers = async (req, res) => {
    try{
          const users = await User.find({});
          res.json(users);
     }    catch (error) {
          res.status(500).json({ message: error.message });
     }
};

exports.createUser = async (req, res) => {
    try {
          const newUser = new User(req.body);
          const savedUser = await newUser.save();
          res.status(201).json(savedUser);
       }    catch (error) {
           res.status(400).json({ message: error.message });
    } 
};