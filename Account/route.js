const route = require("express").Router()

const userController = require("./controller");

route.post("/create/", userController.createUser)

exports.route = route;
