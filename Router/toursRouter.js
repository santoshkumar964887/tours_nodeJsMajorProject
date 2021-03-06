const express = require("express");
const tourControlle = require("../controller/tourController");
const tourRouter = express.Router();
const protect=require('../controller/authController')

//app.get("/api/v1/tours", getAlltour);
//app.get("/api/v1/tours/:id", getOnetour);
//app.post("/api/v1/tours",createNewtour );
//app.patch("/api/v1/tours/:id",updatetour );
//app.delete("/api/v1/tours/:id", deleteOnetour);

//tourRouter.param("id", tourControlle.checkid);
tourRouter
  .route("/monthwise-plan/:year")
  .get(tourControlle.gettourMonthly);

tourRouter
  .route("/getstats")
  .get(tourControlle.gettourStats)
tourRouter
  .route("/top-5-chef")
  .get(tourControlle.AliasingToptour, tourControlle.getAlltour);
tourRouter
  .route("/")
  .get(protect.protect,tourControlle.getAlltour)
  .post(tourControlle.createNewtour);
tourRouter
  .route("/:id")
  .get(tourControlle.getOnetour)
  .patch(tourControlle.updatetour)
  .delete(tourControlle.deleteOnetour);
module.exports = tourRouter;
