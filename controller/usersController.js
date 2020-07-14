
const userModel=require('../model/userModel');
exports.getAllusers = (req, res) => {
    res.status(500).send({
      massage: "internal servere error",
    });
  };
  exports.createNewuser = async(req, res) => {
    try{
      console.log(req.body);
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
  exports.getOneuser = (req, res) => {
    res.status(500).send({
      massage: "internal servere error",
    });
  };
  exports.updateuser = (req, res) => {
    res.status(500).send({
      massage: "internal servere error",
    });
  };
  exports.deleteOneuser = (req, res) => {
    res.status(500).send({
      massage: "internal servere error",
    });
  };