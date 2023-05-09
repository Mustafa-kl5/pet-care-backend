const express = require("express");
const router = express.Router();
const GetBlog = require("../controller/getBlogInfromation/BlogData");
router.post("/getBlogData", GetBlog);
module.exports = router;
