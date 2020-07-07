const express = require("express");
const tourControlle=require('../controller/tourController');
const tourRouter = express.Router();

tourRouter.route("/").get(tourControlle.getAlltour).post(tourControlle.createNewtour);
tourRouter
  .route("/:id")
  .get(tourControlle.getOnetour)
  .patch(tourControlle.updatetour)
  .delete(tourControlle.deleteOnetour);
  module.exports=tourRouter;
