const express = require("express");
const router = express.Router();
const GetBlog = require("../../controller/Admin/Information&Treatment/BlogData");
const getBlogRecords = require("../../controller/Admin/Information&Treatment/GetBlogRecords");
const deleteBlogRecord = require("../../controller/Admin/Information&Treatment/DeleteBlogRecord");
const getAnimalType = require("../../controller/Admin/Information&Treatment/AddAnimalType");
const getTypes = require("../../controller/Admin/Information&Treatment/getTypes");
router.post("/getBlogData", GetBlog);
router.get("/getTypes", getTypes);
router.post("/getAnimalType", getAnimalType);
router.get("/getBlogRecords", getBlogRecords);
router.delete("/deleteBlogRecord", deleteBlogRecord);
module.exports = router;
