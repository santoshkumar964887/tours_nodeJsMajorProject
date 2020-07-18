const express = require("express");
const authControler = require("../controller/authController");
const userControler = require("../controller/usersController");
const userRuter = express.Router();
userRuter.route("/singup").post(authControler.singup);
userRuter.route("/singin").post(authControler.singin);

userRuter
  .route("/")
  .get(userControler.getAllusers)
  .post(userControler.createNewuser);
userRuter
  .route("/:id")
  .get(userControler.getOneuser)
  .patch(userControler.updateuser)
  .delete(userControler.deleteOneuser);
module.exports = userRuter;
