const fs=require('fs');
const dotenv = require("dotenv");
const mongooes = require("mongoose");
const toumodel= require('./model/tourmodel');
const TourModel = require('./model/tourmodel');
dotenv.config({ path: "./config.env" });
mongooes
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("data base connected");
  });
  const data=JSON.parse(fs.readFileSync(`${__dirname}/starter/dev-data/data/tours.json`,'utf-8'));

  const importing=async ()=>{
    try{
        await TourModel.create(data);
        console.log("data has successfully added")
    }catch(err){
        console.log(console.error(err));
    }
    process.exit();

  }
  

  const deleting=async()=>{
    try{
        await TourModel.deleteMany();
        console.log("data has successfully deleted")
    }catch(err){
        console.log(console.error(err));
    }
    process.exit();}

  

  if(process.argv[2]==='--import') importing();
  else if(process.argv[2]=='--delete') deleting();
