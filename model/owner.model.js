const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    trim: true,
    minLength: 3,
  },
  email: String,
  password: String,
  products: {
    type: Array,
    default: [],
  },
  isAdmin: Boolean,
  picture: String,
  gstNumber: Number,
});

const usermodel = mongoose.model("User", userSchema);
module.exports = usermodel;
