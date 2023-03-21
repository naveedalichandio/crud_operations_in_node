const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const blogSchema = new Schema({
  name:{
    type: String
  },
  gender:{
    type: String
  }
});
 
module.exports = mongoose.model("Blog", blogSchema);