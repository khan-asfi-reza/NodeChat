const route = require("express").Router();

const userController = require("./controller");

route.post("/create/", userController.createUser);

route.post("/login/", userController.authenticateUser);

exports.route = route;
