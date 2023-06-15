const express = require("express");
const addAdoptionPost = require("../controller/AdoptionPostControllers/AddAdoptionPost");
const authenticate = require("../controller/Auth/authenticate");
const getAllAdoptionPost = require("../controller/AdoptionPostControllers/GetAllAdoptionPost");
const getAdoptionPostById = require("../controller/AdoptionPostControllers/GetAdoptionPostById");
const addAdoptionToFavourite = require("../controller/AdoptionPostControllers/AddAdoptionToFavourite");
const getFavouriteAdoptionPost = require("../controller/AdoptionPostControllers/GetFavouriteAdoptionPost");
const router = express.Router();

router.post("/addAdoptionPost", authenticate, addAdoptionPost);
router.get("/getAllAdoptionPosts", authenticate, getAllAdoptionPost);
router.get("/getAdoptionPostById/:id", authenticate, getAdoptionPostById);
router.post(
  "/addAdoptionToFavourite/:id",
  authenticate,
  addAdoptionToFavourite
);
router.get(
  "/getFavouriteAdoptionPost/:id",
  authenticate,
  getFavouriteAdoptionPost
);

module.exports = router;
