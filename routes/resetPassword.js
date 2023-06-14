const express = require("express");
const emailReceive = require("../controller/ResetPassword.js/EmailReceive");
const generateEmailOtp = require("../controller/ResetPassword.js/generateEmailOtp");
const verfiyOtp = require("../controller/ResetPassword.js/VerfiyOtp");
const resetPassword = require("../controller/ResetPassword.js/ResetPassword");
const router = express.Router();

router.post("/EmailReceive", emailReceive, generateEmailOtp);
router.post("/VerfiyOtp", verfiyOtp);
router.post("/ResetPassword", resetPassword);

module.exports = router;
