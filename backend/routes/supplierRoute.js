const express = require("express");
const router = express.Router();
const {
  getAllSupplier,
  getSupplier,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} = require("../controllers/supplierController");

// Get all supplier
router.route("/supplier").get(getAllSupplier);

// Get single supplier
router.route("/supplier/:id").get(getSupplier);

// Create new supplier
router.route("/supplier").post(createSupplier);

// Update supplier
router.route("/supplier/:id").put(updateSupplier);

// Delete supplier
router.route("/supplier/:id").delete(deleteSupplier);

module.exports = router;
