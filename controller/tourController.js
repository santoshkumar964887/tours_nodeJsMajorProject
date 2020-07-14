const tourModel = require("./../model/tourmodel");
const catchAsync = require("../ErrorController/AsyncError");
const AppError = require("../ErrorController/appError");

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
exports.AliasingToptour = (req, res, next) => {
  req.query.limit = "5";
  req.query.sort = "-ratingsAverage,price";
  req.query.fields = "name,price,ratingsAverage,summary,difficulty";
  next();
};
exports.getAlltour = catchAsync(async (req, res, next) => {
  const queryobj = { ...req.query };
  //filter
  const excludefields = ["page", "sort", "limit", "fields"];

  excludefields.forEach((el) => delete queryobj[el]);
  //Advanced filtering
  let queryString = JSON.stringify(queryobj);
  queryString = queryString.replace(
    /\b(gte|gt|lte|lt)\b/g,
    (match) => `$${match}`
  );
  let query = tourModel.find(JSON.parse(queryString));
  // sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    this.query = query.sort(sortBy);
  } else {
    query = query.sort("-createdAt");
  }
  // limitFields
  if (req.query.fields) {
    const fields = req.query.fields.split(",").join(" ");
    query = query.select(fields);
  } else {
    query = query.select("-__v");
  }
  //paginate
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1;
  const skip = (page - 1) * limit + 1;
  query = query.skip(skip).limit(limit);

  const tour = await query;
  res.status(200).json({
    status: "success",
    length: tour.length,
    data: {
      tour,
    },
  });
});
exports.getOnetour = catchAsync(async (req, res, next) => {
  const tour = await tourModel.findById(req.params.id);
  if(!tour){
    return( next(new AppError('can not found value this id',404)))
  }
  res.status(200).json({
    status: "success",
    length: tour.length,
    data: {
      tour,
    },
  });
});
exports.createNewtour = catchAsync(async (req, res) => {
  //console.log(req.body);
  //const newtour=new tourModel({});
  //newtour.save();

  let data = await tourModel.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      data,
    },
  });
});
exports.updatetour = catchAsync(async (req, res) => {
  const tour = await tourModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if(!tour){
    return( next(new AppError('can not found value this id',404)))
  }

  res.status(200).json({
    status: "success",
    length: tour.length,
    data: {
      tour,
    },
  });
});
exports.deleteOnetour = catchAsync(async (req, res) => {
  const tour = await tourModel.findByIdAndDelete(req.params.id);
  if(!tour){
    return( next(new AppError('can not found value this id',404)))
  }

  res.status(200).json({
    status: "success",
  });
});

exports.gettourStats = catchAsync(async (req, res) => {
  const tour = await tourModel.aggregate([
    {
      $match: { ratingsAverage: { $gte: 4.5 } },
    },
    {
      $group: {
        _id: { $toUpper: "$difficulty" },
        numtour: { $sum: 1 },
        numRatings: { $sum: "$ratingsQuantity" },
        minPrice: { $min: "$price" },
        maxPrice: { $max: "$price" },
        avgRating: { $avg: "$ratingsAverage" },
      },
    },
    {
      $sort: { numtour: 1 },
    },
    {
      $match: { _id: { $ne: "EASY" } },
    },
  ]);
  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
});
exports.gettourMonthly = catchAsync(async (req, res) => {
  const year = req.params.year * 1;
  const plan = await tourModel.aggregate([
    {
      $unwind: "$startDates",
    },
    {
      $match: {
        startDates: {
          $gte: new Date(`${year}-01-01`),
          $lte: new Date(`${year}-12-31`),
        },
      },
    },
    {
      $group: {
        _id: { $month: "$startDates" },
        sumnum: { $sum: 1 },
        tourname: { $push: "$name" },
      },
    },
    {
      $addFields: { month: "$_id" },
    },
    {
      $project: { _id: 0 },
    },
    {
      $sort: { sumnum: -1 },
    },
  ]);
  res.status(200).json({
    status: "sucess",
    data: {
      plan,
    },
  });
});
