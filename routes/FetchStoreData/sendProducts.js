const express = require("express");
const authenticate = require("../../controller/Auth/authenticate");
const fetchProducts = require("../../controller/fetchStoreData/fetchProductData");
const fetchSelectedProducts = require("../../controller/fetchStoreData/fetchSelectedProducts");
const route = express.Router();
route.get("/sendProducts", fetchProducts);
route.post("/sendSelectedProducts", fetchSelectedProducts);
module.exports = route;
