const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  barcode: {
    type: Number,
    required: [true, "Please enter product ID"],
  },
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },

  category: {
    type: String,
    required: [true, "Please enter product category"],
  },

  stock: {
    type: Number,
    required: [true, "Please enter product stock"],
    maxLength: [4, "Stock cannot exceed 4 characters"],
    default: 1,
  },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Please enter user name"],
  },

  createdAt: {
    type: Date,
    requireded: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
