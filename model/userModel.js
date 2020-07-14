const mongoose=require('mongoose');
const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must have name'],
        unique:[true,'must be unique']
    }
});

const tourModel=mongoose.model('user',userschema);
module.exports=tourModel;