const app = require("./app");
const dotenv=require('dotenv');
const mongooes=require('mongoose');
dotenv.config({path: './config.env'});
console.log(process.env);
mongooes.connect(process.env.DATABASE,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useFindAndModify:false
}).then(con=>{
  console.log('data base connected');
})
const port = 3000;
app.listen(port, () => {
  console.log("App is running on port number 3000 ");
});
