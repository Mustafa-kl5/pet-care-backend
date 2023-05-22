const express = require("express");
const getProfilePicture = require("../controller/ProfileManagment/GetProfilePicture");
const changeUserImage = require("../controller/ProfileManagment/ChangeUserImage");
const router = express.Router();

router.get("/getProfilePicture/:id", getProfilePicture);
router.post("/changeUserImage/:id", changeUserImage);
module.exports = router;
