const Sales = require("../models/Inventory/salesModel");

const ApiFeatures = require("../utils/apiFeatures");
const ErrorHandler = require("../utils/errorHandler");

const catchAsyncError = require("../middleware/catchAsynError");
// get all sales
exports.getAllSales = catchAsyncError(async (req, res, next) => {
  const resultPerPage = 10;
  const itemCount = await Sales.countDocuments();

  const apiFeatures = new ApiFeatures(Sales.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const sales = await apiFeatures.query;

  res.status(200).json({
    success: true,
    sales,
    itemCount,
    resultPerPage,
  });
});
// get single sales

exports.getSales = catchAsyncError(async (req, res, next) => {
  const item = await Sales.findById(req.params.id);

  if (!item) {
    return next(new ErrorHandler("Item not found", 404));
  }

  res.status(200).json({
    success: true,
    item,
  });
});
// create sales

exports.createSales = catchAsyncError(async (req, res, next) => {
  const sales = await Sales.create(req.body);

  res.status(201).json({
    success: true,
    sales,
  });
});

// update sales

exports.updateSales = catchAsyncError(async (req, res, next) => {
  let sales = await Sales.findById(req.params.id);
  if (!sales) {
    return next(new ErrorHandler("Item not Available", 404));
  }
  sales = await Sales.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidator: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    sales,
  });
});

// delete sales

exports.deleteSales = catchAsyncError(async (req, res, next) => {
  const sales = await Sales.findById(req.params.id);

  if (!sales) {
    return next(new ErrorHandler("Item not found", 404));
  }

  await sales.deleteOne();

  res.status(200).json({
    success: true,
    message: "Item deleted successfully",
  });
});
