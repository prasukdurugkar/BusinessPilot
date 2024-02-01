const express = require("express");
const router = express.Router();
const {
  getAllSales,
  getSales,
  createSales,
  updateSales,
  deleteSales,
} = require("../controllers/salesController");

// Get all saless
router.route("/sales").get(getAllSales);

// Get single sales
router.route("/sales/:id").get(getSales);

// Create new saless
router.route("/sales").post(createSales);

// Update sales
router.route("/sales/:id").put(updateSales);

// Delete sales
router.route("/sales/:id").delete(deleteSales);

module.exports = router;
