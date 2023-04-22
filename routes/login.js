const express = require("express");
const { loginView } = require("../controller/loginController.js");
const { registerView } = require("../controller/registrationController.js");
const router = express.Router();
router.get("/register", registerView);
router.get("/login", loginView);
module.exports = router;
