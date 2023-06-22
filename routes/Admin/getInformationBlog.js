const express = require("express");
const router = express.Router();
const addInformationBlog = require("../../controller/Admin/Information&Treatment/addInformationBlog");
const getBlogRecords = require("../../controller/Admin/Information&Treatment/GetBlogRecords");
const deleteBlogRecord = require("../../controller/Admin/Information&Treatment/DeleteBlogRecord");
const addAnimalType = require("../../controller/Admin/Information&Treatment/AddAnimalType");
const getTypes = require("../../controller/Admin/Information&Treatment/getTypes");
router.post("/getBlogData", addInformationBlog);
router.delete("/deleteBlogRecord", deleteBlogRecord);
router.get("/getBlogRecords", getBlogRecords);
router.post("/getAnimalType", addAnimalType);
router.get("/getTypes", getTypes);

module.exports = router;
