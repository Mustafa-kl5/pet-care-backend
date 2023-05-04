const User = require("../../models/user");
const UserOTP = require("../../models/UserOTP.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SendOTPCode = require("./SendOTPCode");

const VerifyEmailController = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(201)
      .send({ message: "Email is not exsist", auth: false });
  }
  const result = {
    id: user.id,
    email: user.email,
  };
  try {
    const responseFromSendOTPCode = await SendOTPCode(result, res);
    const { state, message, data } = responseFromSendOTPCode;

    return res.status(200).json({
      state,
      message,
      data,
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = VerifyEmailController;
