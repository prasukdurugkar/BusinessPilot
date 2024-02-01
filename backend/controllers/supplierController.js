const Supplier = require("../models/Inventory/supplierModel");

const ApiFeatures = require("../utils/apiFeatures");
const ErrorHandler = require("../utils/errorHandler");

const catchAsyncError = require("../middleware/catchAsynError");
// get all supplier
exports.getAllSupplier = catchAsyncError(async (req, res, next) => {
  const resultPerPage = 10;
  const itemCount = await Supplier.countDocuments();

  const apiFeatures = new ApiFeatures(Supplier.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const supplier = await apiFeatures.query;

  res.status(200).json({
    success: true,
    supplier,
    itemCount,
    resultPerPage,
  });
});
// get single supplier

exports.getSupplier = catchAsyncError(async (req, res, next) => {
  const supplier = await Supplier.findById(req.params.id);

  if (!supplier) {
    return next(new ErrorHandler("Item not found", 404));
  }

  res.status(200).json({
    success: true,
    supplier,
  });
});
// create supplier

exports.createSupplier = catchAsyncError(async (req, res, next) => {
  const supplier = await Supplier.create(req.body);

  res.status(201).json({
    success: true,
    supplier,
  });
});

// update supplier

exports.updateSupplier = catchAsyncError(async (req, res, next) => {
  let supplier = await Supplier.findById(req.params.id);
  if (!supplier) {
    return next(new ErrorHandler("Item not Available", 404));
  }
  supplier = await Supplier.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidator: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    supplier,
  });
});

// delete supplier

exports.deleteSupplier = catchAsyncError(async (req, res, next) => {
  const supplier = await Supplier.findById(req.params.id);

  if (!supplier) {
    return next(new ErrorHandler("Item not found", 404));
  }

  await supplier.deleteOne();

  res.status(200).json({
    success: true,
    message: "Item deleted successfully",
  });
});
