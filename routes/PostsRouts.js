const express = require("express");
const addPost = require("../controller/PostsControllers/AddPost");
const getAllPost = require("../controller/PostsControllers/GetAllPosts");
const authenticate = require("../controller/Auth/authenticate");
const getPostById = require("../controller/PostsControllers/GetPostById");
const addLikeToPost = require("../controller/PostsControllers/AddLikeToPost");
const getNumberOfLikes = require("../controller/PostsControllers/GetNumberOfLikes");
const router = express.Router();

router.post("/addPost", authenticate, addPost);
router.get("/getAllPosts", getAllPost);
router.get("/getPostByID/:id", getPostById);
router.post("/addLike/:id", authenticate, addLikeToPost);
router.get("/getLikeNumber/:id", getNumberOfLikes);
module.exports = router;
