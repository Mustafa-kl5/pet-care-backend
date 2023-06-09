const express = require("express");
const authenticate = require("../../controller/Auth/authenticate");
const route = express.Router();
const deleteProductsFromPasket = require("../../controller/fetchStoreData/deleteProducts");
const fetchProductsToPasket = require("../../controller/fetchStoreData/fetchProductsToPasket");
const getCardInformation = require("../../controller/fetchStoreData/getCardInformation");
const StripePaymentPage = require("../../controller/fetchStoreData/StripePaymentPage");

route.get("/fetchProdcutsToPasket", authenticate, fetchProductsToPasket);
route.delete(
  "/deleteProductsFromPasket",
  authenticate,
  deleteProductsFromPasket
);
route.post(
  "/getCardInformation",
  authenticate,
  getCardInformation,
  StripePaymentPage
);
module.exports = route;
