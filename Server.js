const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const PORT = process.env.port || 4000;
console.log(PORT);

// Connect to MongoDB database using Mongoose.
//get route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Listen
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
