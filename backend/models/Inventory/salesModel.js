const mongoose = require("mongoose");
const validator = require("validator");

const salesSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", // Reference to the Product model
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  payment: {},

  customer: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      validate: [validator.isEmail, "Enter valid email"],
    },
    phone: {
      type: String,
      trim: true,
    },
    address: {
      street: String,
      city: String,
      state: String,
      zip: String,
    },
  },

  paymentMethod: {
    type: String,
    enum: ["cash", "card", "onlinePayment"],
    required: true,
  },
  invoiceNumber: {
    type: String,
  },
  notes: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
  },
});

module.exports = mongoose.model("Sales", salesSchema);
