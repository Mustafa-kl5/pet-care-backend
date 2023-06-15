const express = require("express");
const getUserInformation = require("../controller/UserIinformation/GetUserInformation");
const authenticate = require("../controller/Auth/authenticate");
const router = express.Router();

router.get("/getUser/:id", authenticate, getUserInformation);

module.exports = router;
