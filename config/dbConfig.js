const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// MongoDB connection function
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("MongoDB Connected...");
  } catch (err) {
    console.log("Error connecting to MongoDB:", err.message);
    // Exit process with failure
  }
};

module.exports = connectDB;
