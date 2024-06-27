const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
//Connect to MongoDB
const connectDB = async () => {
  await mongoose.connect(process.env.DB_HOST);
  console.log("MongoDB Connected...");
};

module.exports = connectDB;
