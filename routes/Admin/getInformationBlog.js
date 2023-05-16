const express = require("express");
const router = express.Router();
const GetBlog = require("../../controller/Admin/Information&Treatment/BlogData");
const getBlogRecords = require("../../controller/Admin/Information&Treatment/GetBlogRecords");
const deleteBlogRecord = require("../../controller/Admin/Information&Treatment/DeleteBlogRecord");
router.post("/getBlogData", GetBlog);
router.get("/getBlogRecords", getBlogRecords);
router.delete("/deleteBlogRecord", deleteBlogRecord);
module.exports = router;
