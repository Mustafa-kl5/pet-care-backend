const { TimeDiffrent } = require("../../assest/emailTemplet");
const otpModel = require("../../models/UserOTP");

const verfiyOtp = async (req, res, next) => {
  const { otpId, otpCode } = req.body;
  try {
    const otp = await otpModel.findById(otpId);
    if (otpCode === otp.otpCode) {
      if (TimeDiffrent(otp.ExpireAt) > 3.0) {
        res.json({
          massage: "Otp Code Is Expired",
          isSuccess: false,
          otp: otp,
        });
      } else {
        res.json({ massage: "Otp Code Is Correct", isSuccess: true });
      }
    } else {
      res.json({
        massage: "Otp Code Is Not Correct",
        isSuccess: false,
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ massage: "Internal Server Error", isSuccess: false });
  }
};

module.exports = verfiyOtp;
