const userModle = require("../../models/user");
const otpModel = require("../../models/UserOTP");

const emailReceive = async (req, res, next) => {
  const { email } = req.body;
  const digits = "0123456789";
  let otp = "";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    otp += digits[randomIndex];
  }
  try {
    const user = await userModle.findOne({ email });
    if (user) {
      const newOtp = new otpModel({
        otpCode: otp,
      });
      req.data = {
        otpId: newOtp._id,
        otp: otp,
        email: email,
      };
      await newOtp.save();
      next();
    } else {
      res.status(201).json({ massage: "Email Not Found", isSuccess: false });
    }
  } catch (error) {
    res
      .status(500)
      .json({ massage: "Internal Server Error", isSuccess: false });
  }
};

module.exports = emailReceive;
