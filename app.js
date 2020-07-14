const express = require("express");
const AppError = require("./ErrorController/appError");
const tourRouter = require("./Router/toursRouter");
const userRuter = require("./Router/userRouters");
const globalErrorHandler=require('./ErrorController/globalError');
const { Error } = require("mongoose");
const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/starter/public`));

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRuter);
app.all("*", (req, res, next) => {
  next( new AppError(`can't find ${req.originalUrl} on this server`, 404));
});
app.use(globalErrorHandler.globalError);

module.exports = app;
