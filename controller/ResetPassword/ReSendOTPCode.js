const UserOTP = require("../../models/UserOTP");
const SendOTPCode = require("./SendOTPCode");
const ReSendOTPCode = async (req, res) => {
  try {
    let { userID, email } = req.body;
    if (!userID || !email) {
      res.json({ message: "Wrong Email , Please TryAgain" });
    } else {
      result = { id: userID, email: email };
      await UserOTP.deleteMany({ userID });
      await SendOTPCode(result, res);
    }
  } catch (error) {
    res.json({
      message: "Somthing Went Wrong ,Please Try Again",
    });
    console.log(error);
  }
};
module.exports = ReSendOTPCode;
