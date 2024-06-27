const mongoose = require("mongoose");

//Connect to MongoDB
const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB Connected...");
};

module.exports = connectDB;
