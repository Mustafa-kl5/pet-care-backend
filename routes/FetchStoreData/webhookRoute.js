const express = require("express");
const getPaymentState = require("../../controller/fetchStoreData/getPaymentState");
const UpdatePaymentSuccsess = require("../../controller/fetchStoreData/UpdatePaymentSuccsess");
const route = express.Router();
route.use(express.raw({ type: "application/json" }));
route.post("/stripe-webhook", getPaymentState, UpdatePaymentSuccsess);
module.exports = route;
