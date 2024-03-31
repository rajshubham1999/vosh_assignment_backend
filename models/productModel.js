const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price:{
    type:Number,
    required:true,
  },

  poster: {
    type: String,
    required: true,
  },
  
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  }
});

module.exports = mongoose.model("products", productSchema);