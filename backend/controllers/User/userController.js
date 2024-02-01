const User = require('../../models/User/userModel')
const ErrorHandler = require('../../utils/errorHandler')
const catchAsyncError = require('../../middleware/catchAsynError')
const sendToken = require('../../utils/jwtToken')


exports.registerUser = catchAsyncError(async (req, res, next) =>{
    const {name, email, password} = req.body

    const user =  await User.create({
        name,
        email,
        password
    })

    sendToken(user, 200, res)
})

// exports.loginUser = catchAsyncError(async (req, res, next) =>{
//     const {email, password} = req.body
    
//     if (email === undefined || password === undefined) {
//         return next(new ErrorHandler('Please Enter Email & Password', 400))
//     }
//     const user = await User.findOne({email}).select('+password')

//     const isPasswordMatched = await user.comparePassword(password)
//     if (isPasswordMatched) {
//         sendToken(userLogin, 200, res)
//     }
//     else {
//         return next(new ErrorHandler('Invalid Email or Password', 401))
//     }
   


//     if (!userLogin) {
//         return next(new ErrorHandler('Invalid Email or Password', 401))
//     }

// })
exports.loginUser = catchAsyncError (async (req, res, next) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return next(new ErrorHandler("Please enter email & password", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    sendToken(user, 200, res);
});

exports.logout = catchAsyncError(async (req, res, next) => {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
  
    res.status(200).json({
      success: true,
      message: "Logged Out",
    });
  });

  //delete user
  exports.deleteUser = catchAsyncError(async (req, res, next) => {
    let user = await User.findById(req.params.id);
  
    if (!user) {
      return next(new ErrorHandler("User not available", 404));
    }
    user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  });