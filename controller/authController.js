const userModel=require('../model/userModel');
exports.singup= async(req, res) => {
    try{
      
    const user= await userModel.create(req.body);
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