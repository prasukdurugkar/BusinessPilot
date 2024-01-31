const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["client", "employee", "admin", "owner"],
    default: "client",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Enter valid email"],
  },
  password: {
    type: String,
    require: true,
    select: false, // be shown while using .find()
    minLen: 8,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("User", userSchema);
