const express = require("express");
const authenticate = require("../controller/Auth/authenticate");
const getOrderDetails = require("../controller/getOrderDetails");
const route = express.Router();
route.post("/getOrderDetails", authenticate, getOrderDetails);
module.exports = route;
