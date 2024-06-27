const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// MongoDB connection function
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected succesfully...");
  } catch (err) {
    console.log("Error connecting to MongoDB:", err.message);
    // Exit process with failure
  }
};

module.exports = connectDB;
