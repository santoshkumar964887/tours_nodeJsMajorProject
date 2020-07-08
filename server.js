const app = require("./app");
const dotenv=require('dotenv');
const mongooes=require('mongoose');
dotenv.config({path: './config.env'});
mongooes.connect(process.env.DATABASE,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useFindAndModify:false
}).then(con=>{
  console.log('data base connected');
})

const tourSchema= mongooes.Schema({
  name:{
    type:String,
    required:[true,'name must be present'],
    unique:true
  },
  age:{
    type:Number,
    default: 19
  }
});

const Tour=mongooes.model('Tour',tourSchema);
 const testtour= new Tour({
   name:'santosh',
   age:20
 });
 testtour.save();
 
const port = 3000;
app.listen(port, () => {
  console.log("App is running on port number 3000 ");
});
