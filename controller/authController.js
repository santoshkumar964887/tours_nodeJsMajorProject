const userModel=require('../model/userModel');
const jwt=require('jsonwebtoken');
const catchAsync = require("../ErrorController/AsyncError");
const AppError = require("../ErrorController/appError");
const bcrypt=require('bcryptjs');

const webtoken=id=>jwt.sign({id:id},process.env.JWT_KEY,{
  expiresIn:process.env.JWT_Expire
});
exports.singup=catchAsync( async(req, res) => {
    
       
    const user= await userModel.create({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
      passwordConfirm:req.body.passwordConfirm

    });
    const token= webtoken(user._id);


    res.status(201).json({
      status:'success',
      token,
      data:{
        user
      }
    })
  
  });
  exports.singin=catchAsync(async(req,res,next)=>{
    const {email,password}=req.body;
    if(!email || !password) return next(new AppError("Please enter email and password",400));
    const user= await userModel.findOne({email}).select('+password');
  
    
    if(!user||!await bcrypt.compare(password,user.password)) return next(new AppError(" email and password not match",500));
    const token= webtoken(user._id);
    res.status(200).json({
      status:"success",
      token,
      data:{
        user
      }

    });
  });