const express = require("express");
const userControler=require('../controller/usersController');
const userRuter = express.Router();

userRuter.route("/").get(userControler.getAllusers).post(userControler.createNewuser);
userRuter.route("/:id").get(userControler.getOneuser).patch(userControler.updateuser).delete(userControler.deleteOneuser);
module.exports=userRuter;