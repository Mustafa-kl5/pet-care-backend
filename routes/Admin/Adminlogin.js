const express = require("express");
const route = express.Router();
const AdminloginController = require("../../controller/Auth/AdminloginController");
route.post("/adminLogin", AdminloginController);
module.exports = route;
