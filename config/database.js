const mongoose  = require("mongoose");
require('dotenv').config();


const connectDB =  () => {
  
     mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("Database connected successfully"))
    .catch((error)=>{
      console.log("db facing connection issue");
      console.log(error);
    process.exit(1);
  
  })
};
module.exports = connectDB;