const express = require("express");
const router = express.Router();
const GetBlog = require("../controller/Admin/BlogData");
const getBlogRecords = require("../controller/Admin/GetBlogRecords");
const deleteBlogRecord = require("../controller/Admin/DeleteBlogRecord");
router.post("/getBlogData", GetBlog);
router.get("/getBlogRecords", getBlogRecords);
router.delete("/deleteBlogRecord", deleteBlogRecord);
module.exports = router;
