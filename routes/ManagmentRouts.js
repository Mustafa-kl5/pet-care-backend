const express = require("express");
const getProfilePicture = require("../controller/ProfileManagment/GetProfilePicture");
const changeUserImage = require("../controller/ProfileManagment/ChangeUserImage");
const getNormalPostUser = require("../controller/ProfileManagment/GetNormalPostUser");
const deleteNormalPost = require("../controller/ProfileManagment/DeleteNormalPost");
const authenticate = require("../controller/Auth/authenticate");
const updateNormalPost = require("../controller/ProfileManagment/UpdateNormalPost");
const getAdoptionPost = require("../controller/ProfileManagment/GetAdoptionPost");
const deleteAdoptionPost = require("../controller/ProfileManagment/DeleteAdoptionPost");
const changeAdoptionPostStatus = require("../controller/ProfileManagment/ChangeAdoptionPostStatus");
const getFavouriteAdoptionPost = require("../controller/ProfileManagment/GetFavouriteAdoptionPost");
const getOrderDetails = require("../controller/ProfileManagment/getOrderDetails");
const router = express.Router();
router.get("/getProfilePicture/:id", getProfilePicture);
router.get("/getNormalPostUser/:id", getNormalPostUser);
router.get("/getAdoptionPost/:id", getAdoptionPost);
router.get("/getFavouriteAdoptionPost", authenticate, getFavouriteAdoptionPost);
router.delete("/deleteNormalPost/:id", authenticate, deleteNormalPost);
router.delete("/deleteAdoptionPost/:id", authenticate, deleteAdoptionPost);
router.post("/updateNormalPost/:id", authenticate, updateNormalPost);
router.post("/changeUserImage/:id", changeUserImage);
router.post(
  "/changeAdoptionPostStatus/:id",
  authenticate,
  changeAdoptionPostStatus
);
router.post("/getOrderHistory/:id", authenticate, getOrderDetails);
module.exports = router;
