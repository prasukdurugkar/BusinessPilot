const Purchase = require("../models/Inventory/purchaseModel");

const ApiFeatures = require("../utils/apiFeatures");
const ErrorHandler = require("../utils/errorHandler");

const catchAsyncError = require("../middleware/catchAsynError");
// get all Purchase
exports.getAllPurchase = catchAsyncError(async (req, res, next) => {
  const resultPerPage = 10;
  const itemCount = await Purchase.countDocuments();

  const apiFeatures = new ApiFeatures(Purchase.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const purchase = await apiFeatures.query;

  res.status(200).json({
    success: true,
    purchase,
    itemCount,
    resultPerPage,
  });
});
// get single purchase

exports.getPurchase = catchAsyncError(async (req, res, next) => {
  const item = await Purchase.findById(req.params.id);

  if (!item) {
    return next(new ErrorHandler("Item not found", 404));
  }

  res.status(200).json({
    success: true,
    item,
  });
});
// create Purchase

exports.createPurchase = catchAsyncError(async (req, res, next) => {
  const item = await Purchase.create(req.body);

  res.status(201).json({
    success: true,
    item,
  });
});

// update Purchase

exports.updatePurchase = catchAsyncError(async (req, res, next) => {
  let purchase = await Purchase.findById(req.params.id);
  if (!purchase) {
    return next(new ErrorHandler("Item not Available", 404));
  }
  purchase = await Purchase.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidator: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    purchase,
  });
});

// delete purchase

exports.deletePurchase = catchAsyncError(async (req, res, next) => {
  const purchase = await Purchase.findById(req.params.id);

  if (!purchase) {
    return next(new ErrorHandler("Item not found", 404));
  }

  await purchase.deleteOne();

  res.status(200).json({
    success: true,
    message: "Item deleted successfully",
  });
});
