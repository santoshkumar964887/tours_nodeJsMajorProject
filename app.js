const express = require("express");

const tourRouter = require("./Router/toursRouter");
const userRuter = require("./Router/userRouters");
const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/starter/public`));

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRuter);
app.all('*',(req,res,next)=>{
    res.status(404).json({
        status:'Fail',
        message: `can't find ${req.originalUrl} on this server`
    });
});

module.exports = app;
