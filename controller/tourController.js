const tourModel = require("./../model/tourmodel");

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
exports.getAlltour = async (req, res) => {
  try {
    const tour = await tourModel.find();
    res.status(200).json({
      status: "success",
      length: tour.length,
      data: {
        tour
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",

      message: err
    });
  }
};
exports.getOnetour = async (req, res) => {
  
   
  try {
    const tour =await tourModel.findById(req.params.id);
    res.status(200).json({
      status: "success",
      length: tour.length,
      data: {
        tour
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",

      message: err
    });
  }
  
  
};
exports.createNewtour = async (req, res) => {
  //console.log(req.body);
  //const newtour=new tourModel({});
  //newtour.save();
  try {
    let data = await tourModel.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        data
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
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
