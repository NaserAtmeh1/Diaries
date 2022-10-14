const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  usename: {
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
    required: false,
    default: false,
  },
  gender: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = { User };
