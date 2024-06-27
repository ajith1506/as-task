const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
//Connect to MongoDB
const connectDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/user-task");
  console.log("MongoDB Connected...");
};

module.exports = connectDB;
