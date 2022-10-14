const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    uniqe : true
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  gender: {
    type: String,
  },
  img: {
    type: String,
  },
  age: {
    type: Number,
  },},
  {timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = { User };
