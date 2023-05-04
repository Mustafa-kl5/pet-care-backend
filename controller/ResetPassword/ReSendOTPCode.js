const UserOTP = require("../../models/UserOTP");
const SendOTPCode = require("./SendOTPCode");
const ReSendOTPCode = async (req, res) => {
  try {
    let { userID, email } = req.body;
    if (!userID || !email) {
      throw Error("userID or email is required");
    } else {
      result = { id: userID, email: email };
      await UserOTP.deleteMany({ userID });
      await SendOTPCode(result, res);
    }
  } catch (error) {
    res.json({
      state: "failed",
      message: error.message,
    });
    console.log(error);
  }
};
module.exports = ReSendOTPCode;
