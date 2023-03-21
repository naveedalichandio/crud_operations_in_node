const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();

const blogRouter = require("./routes/BlogRoutes");
app.use(express.json());
app.use("/api", blogRouter);
//configure mongoose
mongoose.connect(
  // get the url from your database
  process.env.MONGODB_URI || "mongodb://localhost:27017/CRUD",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);
 
//middleware
app.use(express.json());
 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
 
module.exports = app;