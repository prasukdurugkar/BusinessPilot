const express = require("express");
const router = express.Router();
const {
  getAllPurchase,
  getPurchase,
  createPurchase,
  updatePurchase,
  deletePurchase,
} = require("../controllers/purchaseController");

// Get all purchases
router.route("/purchase").get(getAllPurchase);

// Get single purchase
router.route("/purchase/:id").get(getPurchase);

// Create new purchases
router.route("/purchase").post(createPurchase);

// Update purchase
router.route("/purchase/:id").put(updatePurchase);

// Delete purchase
router.route("/purchase/:id").delete(deletePurchase);

module.exports = router;
