const express = require('express');  // instance of express
const app = express();

require ("dotenv").config();  // load environment variables from .env file 
const PORT = process.env.PORT || 3000;  // set port from environment variable or default to 3000 


app.use(express.json());  // middleware to parse JSON request bodies

const blog = require("./routes/blog")
app.use("/api/v1", blog);  // use blog routes under mounting /api/v1/blog path

const connectDB = require("./config/database");  // import database connection function
connectDB();  // connect to the database


app.listen(PORT, () => {  // start the server
  console.log(`Server is running on port ${PORT}`);
})

app.get("/", (req, res) => {  // root route
  res.send(`<h1>welcome to the home page </h1>`)
}) 