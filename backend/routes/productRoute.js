const express = require("express");
const router = express.Router();
const {
  getAllProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// Get all products
router.route("/products").get(getAllProduct);

// Get single product
router.route("/product/:id").get(getProduct);

// Create new products
router.route("/product").post(createProduct);

// Update product
router.route("/product/:id").put(updateProduct);

// Delete product
router.route("/product/:id").delete(deleteProduct);

module.exports = router;
