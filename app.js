const express = require("express");

const tourRouter=require('./Router/toursRouter');
const userRuter=require('./Router/userRouters');
const app = express();
app.use(express.json());


const getAllusers = (req, res) => {
  res.status(500).send({
    massage: "internal servere error",
  });
};
const createNewuser = (req, res) => {
  res.status(500).send({
    massage: "internal servere error",
  });
};
const getOneuser = (req, res) => {
  res.status(500).send({
    massage: "internal servere error",
  });
};
const updateuser = (req, res) => {
  res.status(500).send({
    massage: "internal servere error",
  });
};
const deleteOneuser = (req, res) => {
  res.status(500).send({
    massage: "internal servere error",
  });
};

//app.get("/api/v1/tours", getAlltour);
//app.get("/api/v1/tours/:id", getOnetour);
//app.post("/api/v1/tours",createNewtour );
//app.patch("/api/v1/tours/:id",updatetour );
//app.delete("/api/v1/tours/:id", deleteOnetour);



app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRuter);

const port = 3000;
app.listen(port, () => {
  console.log("App is running on port number 3000 ");
});
