const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      unitPrice: {
        type: Number,
        required: true,
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  supplier: {
    required: true,
    ref: "Supplier",
  },
  paymentMethod: {
    type: String,
    enum: ["cash", "card", "onlinePayment", "bankTransfer"],
  },
  invoiceNumber: {
    type: String,
    unique: true,
  },
  notes: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User
  },
});

const Purchase = mongoose.model("Purchase", purchaseSchema);

module.exports = Purchase;
