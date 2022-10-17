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


module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
