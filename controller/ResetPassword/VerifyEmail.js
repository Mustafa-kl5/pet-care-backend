const User = require("../../models/user");
const SendOTPCode = require("./SendOTPCode");
const VerifyEmailController = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(201).send({ message: "Email is not exist", auth: false });
  }
  try {
    const result = {
      id: user.id,
      email: user.email,
    };

    const responseFromSendOTPCode = await SendOTPCode(result, res);
    const { message, data } = responseFromSendOTPCode;
    res.status(200).json({
      message,
      data,
    });
  } catch (err) {
    console.log("Wrong!");
  }
};
module.exports = VerifyEmailController;
