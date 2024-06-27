const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const pkg = require("validator");
const dotenv = require("dotenv");
const { isEmail } = pkg;
dotenv.config();

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
      unique: true,
      lowercase: true,
    },
    firstname: {
      type: String,
      required: [true, "first name is required"],
    },

    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      lowercase: true,
      validate: [isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minlength: [6, "incorrect password"],
    },
  },
  { timestamps: true }
);

// fire a function before doc saved to db
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
