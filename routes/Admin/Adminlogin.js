const express = require("express");
const route = express.Router();
const login = require("../../controller/Auth/AdminloginController");
route.post("/adminLogin", login);
module.exports = route;
