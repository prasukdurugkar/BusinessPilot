const express = require('express')

const {
  getAllInventory,
  getInventory,
  createInventory,
  updateInventory,
  deleteInventory
} = require('../controllers/inventoryController')

const router  = express.Router()
// Authorized roles are remaining yet

// Get all items
router.route("/items").get(getAllInventory)

// Get single item
router.route("/items/:id").get(getInventory)

// Create new item
router.route("/items").post(createInventory)

// Update item
router.route("/items/:id").put(updateInventory)

// Delete item
router.route("/items/:id").delete(deleteInventory)

module.exports = router;


