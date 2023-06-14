const express = require("express");
const {
  registrationController,
} = require("../controller/Auth/registrationController");
const router = express.Router();

router.post("/registration", registrationController);

module.exports = router;
