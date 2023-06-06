const UserOTP = require("../../models/UserOTP");
const bcrypt = require("bcrypt");
const VerifyOTP = async (req, res) => {
  try {
    const { userID, otpCode } = req.body;
    if (!userID || !otpCode) {
      res.json({
        message: "Please enter an OTP Code! ",
      });
    } else {
      const userOTPRecord = await UserOTP.find({ userID });
      if (userOTPRecord.length < 1) {
        res.json({
          message: "user otp is not exist!",
        });
      } else {
        const { ExpireAt } = userOTPRecord[0];
        const hashedOTP = userOTPRecord[0].otp;

        if (ExpireAt < Date.now()) {
          await UserOTP.deleteMany({ userID });
          res.json({
            message: "Your OTP has expired, please try again",
          });
        } else {
          const validOTP = bcrypt.compareSync(otpCode, hashedOTP);
          if (!validOTP) {
            res.json({ message: "The OTP you have entered is not correct" });
          } else {
            await UserOTP.deleteMany({ userID });
            res.json({
              message: "User email Verified Successfully",
            });
          }
        }
      }
    }
  } catch (error) {
    res.status(404).json({ error: "Somthing Went Wrong!" });
  }
};

module.exports = VerifyOTP;
