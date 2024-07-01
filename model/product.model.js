const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  image: String,
  name: String,
  price: Number,
  discount: {
    type: Number,
    default: 0,
  },
  bgColor: String,
  pannelColor: String,
  textColor: String,
});

const productmodel = mongoose.model("Product", productSchema);
module.exports = usermodel;
