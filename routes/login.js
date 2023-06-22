const express = require("express");
const login = require("../controller/Auth/loginController");
const router = express.Router();

router.post("/login", login);

module.exports = router;
