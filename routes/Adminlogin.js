const express = require("express");
const route = express.Router();
const AdminloginController = require("../controller/Auth/AdminloginController.js");
route.post("/adminLogin", AdminloginController);
module.exports = route;
