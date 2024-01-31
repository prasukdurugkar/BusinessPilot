const Product = require("../models/Inventory/productModel");

const ApiFeatures = require("../utils/apiFeatures");
const ErrorHandler = require("../utils/errorHandler");

const catchAsyncError = require("../middleware/catchAsynError");
// get all product
exports.getAllProduct = catchAsyncError(async (req, res, next) => {
  const resultPerPage = 10;
  const itemCount = await Product.countDocuments();

  const apiFeatures = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const product = await apiFeatures.query;

  res.status(200).json({
    success: true,
    product,
    itemCount,
    resultPerPage,
  });
});
// get single product

exports.getProduct = catchAsyncError(async (req, res, next) => {
  const item = await Product.findById(req.params.id);

  if (!item) {
    return next(new ErrorHandler("Item not found", 404));
  }

  res.status(200).json({
    success: true,
    item,
  });
});
// create product

exports.createProduct = catchAsyncError(async (req, res, next) => {
  const item = await Product.create(req.body);

  res.status(201).json({
    success: true,
    item,
  });
});

// update product

exports.updateProduct = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Item not Available", 404));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidator: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
});

// delete product

exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Item not found", 404));
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Item deleted successfully",
  });
});
