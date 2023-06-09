const express = require("express");
const router = express.Router();
const addProduct = require("../../controller/Admin/Store/addProduct.js");
const getProductsRecords = require("../../controller/Admin/Store/GetProductsRecords.js");
const DeleteProductRecord = require("../../controller/Admin/Store/DeleteProductRecord.js");
const getOrders = require("../../controller/Admin/Store/getOrders.js");
const setOrderState = require("../../controller/Admin/Store/setOrderState.js");
const getTypes = require("../../controller/Admin/Information&Treatment/getTypes.js");
router.post("/getProductData", addProduct);
router.delete("/deleteProductRecord", DeleteProductRecord);
router.get("/getProductsRecords", getProductsRecords);
router.get("/getOrders", getOrders);
router.put("/setOrderState", setOrderState);
router.get("/getTypes", getTypes);
module.exports = router;
