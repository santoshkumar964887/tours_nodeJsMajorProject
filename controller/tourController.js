const fs = require("fs");
const tourModel=require('./../model/tourmodel');
  /*exports.checkReqbody=(req,res,next)=>{
    const {name}=req.body;
    
    if (!name) {
      res.status(404).json({
        status: "Fail",
        message: "name must be  present",
      });
    }
    next();
    
  }
  exports.checkid=(req,res,next,val)=>{
    val = val* 1;
    console.log(val)
    if (tours.length < val) {
      res.status(404).json({
        status: "Fail",
        message: "Invalid Id",
      });
    }
    next();
    
  };*/
 exports.getAlltour = (req, res) => {
    res.status(200).json({
      status: "success"
    });
  };
 exports.getOnetour = (req, res) => {
    console.log(req.prams);
    const id = req.params.id * 1;
    
  };
 exports.createNewtour = (req, res) => {
    //console.log(req.body);
    let reqdata = req.body;
    let newId = tours.length + 1;
    
  };
  exports.updatetour = (req, res) => {
    res.status(200).json({
      status: "success",
    });
  };
  exports.deleteOnetour = (req, res) => {
    console.log(req.prams);
   
    res.status(200).json({
      status: "success",
    });
  };