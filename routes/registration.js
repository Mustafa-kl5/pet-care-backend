const express = require("express");
const {
  registrationController,
} = require("../controller/registrationController.js");
const router = express.Router();

router.post("/registration", registrationController);

module.exports = router;
