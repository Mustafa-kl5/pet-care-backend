const express = require("express");
const addPost = require("../controller/PostsControllers/AddPost");
const getAllPost = require("../controller/PostsControllers/GetAllPosts");
const authenticate = require("../controller/Auth/authenticate");
const getPostById = require("../controller/PostsControllers/GetPostById");
const addLikeToPost = require("../controller/PostsControllers/AddLikeToPost");
const getNumberOfLikes = require("../controller/PostsControllers/GetNumberOfLikes");
const addComment = require("../controller/PostsControllers/AddComment");
const getComments = require("../controller/PostsControllers/GetComments");
const router = express.Router();

router.post("/addPost", authenticate, addPost);
router.get("/getAllPosts", authenticate, getAllPost);
router.get("/getPostByID/:id", authenticate, getPostById);
router.post("/addLike/:id", authenticate, addLikeToPost);
router.get("/getLikeNumber/:id", authenticate, getNumberOfLikes);
router.post("/addComment/:id", authenticate, addComment);
router.get("/getComments/:id", authenticate, getComments);
module.exports = router;
