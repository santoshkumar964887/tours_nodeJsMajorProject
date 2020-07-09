const mongooes=require('mongoose');
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
  
  const TourModel=mongooes.model('Tour',tourSchema);
  module.exports=TourModel;