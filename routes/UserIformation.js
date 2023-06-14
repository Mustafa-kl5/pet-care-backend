const express = require("express");
const getUserInformation = require("../controller/UserIinformation/GetUserInformation");
const router = express.Router();

router.get("/getUser/:id", getUserInformation);

module.exports = router;
