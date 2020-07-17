const userModel=require('../model/userModel');
exports.singup= async(req, res) => {
  console.log(req.body);
    try{
       
    const user= await userModel.create({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
      passwordConfirm:req.body.passwordConfirm

    });
    res.status(201).json({
      status:'success',
      data:{
        user
      }
    })
    }catch(err){
    res.status(400).send({
      status:'Fail',
      massage: err,
    });
  }
  };