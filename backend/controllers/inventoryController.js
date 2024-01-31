const Inventory = require('../models/inventoryModel')


const ApiFeatures = require("../utils/apiFeatures");
const ErrorHandler = require("../utils/errorHandler");

const catchAsyncError = require("../middleware/catchAsyncError");


exports.getAllInventory = catchAsyncError(async (req, res, next) => {
    const resultPerPage = 10;
    const itemCount = await Inventory.countDocuments();

    const apiFeatures = new ApiFeatures(Inventory.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage)
    const inventory = await apiFeatures.query;


    res.status(200).json({
        success: true,
        inventory,
        itemCount,
        resultPerPage,
    });
})


exports.getItemDetail = catchAsyncError(async (req, res, next) =>{
    const item = await Inventory.findById(req.params.id);

    if(!item){
        return next(new ErrorHandler("Item not found", 404));
    }

    res.status(200).json({
        success: true,
        item,
    })
})

exports.createItem = catchAsyncError(async (req, res, next) => {
    const item = await Inventory.create(req.body);

    res.status(201).json({
        success: true,
        item,
    })
})


exports.updateItem = catchAsyncError(async ( req, res, next) => {
    let item = await Inventory.findById(req.params.id)
    if(!item) {
        return next(new ErrorHandler("Item not Available", 404))
    }
    console.log("Item Found");

    item = await Inventory.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidator: true,
        useFindAndModify: false,

    })
    res.status(200).json({
        success: true,
        product,
      });

    
})

exports.deleteItem = catchAsyncError(async (req, res, next) => {
    const item = await Inventory.findById(req.params.id);

    if(!item){
        return next(new ErrorHandler("Item not found", 404));
    }

    await item.remove();

    res.status(200).json({
        success: true,
        message: "Item deleted successfully",
    })
})
