const fs = require("fs");
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../starter/dev-data/data/tours.json`)
  );
  
 exports.getAlltour = (req, res) => {
    res.status(200).json({
      status: "success",
      length: tours.length,
      data: {
        tours,
      },
    });
  };
 exports.getOnetour = (req, res) => {
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
 exports.createNewtour = (req, res) => {
    //console.log(req.body);
    let reqdata = req.body;
    let newId = tours.length + 1;
    const newTour = Object.assign({ id: newId }, reqdata);
    tours.push(newTour);
    const write = fs.writeFile(
      `${__dirname}/../starter/dev-data/data/tours.json`,
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
  exports.updatetour = (req, res) => {
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
  exports.deleteOnetour = (req, res) => {
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