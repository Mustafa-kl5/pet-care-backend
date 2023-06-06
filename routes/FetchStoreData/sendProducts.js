const express = require("express");
const getTypes = require("../../controller/Admin/Information&Treatment/getTypes");
const authenticate = require("../../controller/Auth/authenticate");
const fetchProducts = require("../../controller/fetchStoreData/fetchProductData");
const fetchSelectedProducts = require("../../controller/fetchStoreData/fetchSelectedProducts");
const route = express.Router();
route.get("/sendProducts", fetchProducts);
route.post("/sendSelectedProducts", authenticate, fetchSelectedProducts);
route.get("/getTypes", getTypes);

module.exports = route;
