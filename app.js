const express = require("express");

const tourRouter = require("./Router/toursRouter");
const userRuter = require("./Router/userRouters");
const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/starter/public`));

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRuter);

module.exports = app;
