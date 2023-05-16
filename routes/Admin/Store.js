const express = require("express");
const router = express.Router();
const ProductData = require("../../controller/Admin/Store/ProductData.js");
const ProductsRecords = require("../../controller/Admin/Store/GetProductsRecords.js");
const DeleteProductRecord = require("../../controller/Admin/Store/DeleteProductRecord.js");
router.post("/getProductData", ProductData);
router.get("/getProductsRecords", ProductsRecords);
router.delete("/deleteProductRecord", DeleteProductRecord);
module.exports = router;
