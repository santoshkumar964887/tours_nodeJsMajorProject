const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/starter/dev-data/data/tours.json`)
);

const getAlltour=(req, res) => {
    res.status(200).json({
      status: "success",
      length: tours.length,
      data: {
        tours,
      },
    });
  };
const getOnetour=(req, res) => {
    console.log(req.prams);
    const id = req.params.id * 1;
    const match = tours.find((el) => el.id === id);
    if (!match) {
      res.status(404).json({
        status: "Fail",
        message: "Invalid Id",
      });
    }
    res.status(200).json({
      status: "success",
      length: tours.length,
      data: {
        match,
      },
    });
  };
const createNewtour=(req, res) => {
    //console.log(req.body);
    let reqdata = req.body;
    let newId = tours.length + 1;
    const newTour = Object.assign({ id: newId }, reqdata);
    tours.push(newTour);
    const write = fs.writeFile(
      `${__dirname}/starter/dev-data/data/tours.json`,
      JSON.stringify(tours),
      (err) => {
        console.log(err);
      }
    );
  
    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  };
const updatetour=(req, res) => {
    console.log(req.prams);
    const id = req.params.id * 1;
    if (tours.length < id) {
      res.status(404).json({
        status: "Fail",
        message: "Invalid Id",
      });
    }
    res.status(200).json({
      status: "success",
    });
  };
const deleteOnetour=(req, res) => {
    console.log(req.prams);
    const id = req.params.id * 1;
    if (tours.length < id) {
      res.status(404).json({
        status: "Fail",
        message: "Invalid Id",
      });
    }
    res.status(200).json({
      status: "success",
    });
  };




  const getAllusers=(req,res)=>{
      res.status(500).send({
          "massage":"internal servere error"
      });
  };
  const createNewuser=(req,res)=>{
    res.status(500).send({
        "massage":"internal servere error"
    });
};
const getOneuser=(req,res)=>{
    res.status(500).send({
        "massage":"internal servere error"
    });
};
const updateuser=(req,res)=>{
    res.status(500).send({
        "massage":"internal servere error"
    });
};
const deleteOneuser=(req,res)=>{
    res.status(500).send({
        "massage":"internal servere error"
    });
};

//app.get("/api/v1/tours", getAlltour);
//app.get("/api/v1/tours/:id", getOnetour);
//app.post("/api/v1/tours",createNewtour );
//app.patch("/api/v1/tours/:id",updatetour );
//app.delete("/api/v1/tours/:id", deleteOnetour);

const tourRouter=express.Router();
const userRuter=express.Router();

tourRouter.route("/").get(getAlltour).post(createNewtour);
tourRouter.route("/:id").get(getOnetour).patch(updatetour).delete(deleteOnetour);
userRuter.route("/").get(getAllusers).post(createNewuser);
userRuter.route("/:id").get(getOneuser).patch(updateuser).delete(deleteOneuser);

app.use("/api/v1/tours",tourRouter);
app.use("/api/v1/users",userRuter);



const port = 3000;
app.listen(port, () => {
  console.log("App is running on port number 3000 ");
});
