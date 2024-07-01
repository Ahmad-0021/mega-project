const mongoose = require("mongoose");

const dbConnection = mongoose
  .connect("mongodb://localhost:27017/MegaProject")
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = dbConnection;
