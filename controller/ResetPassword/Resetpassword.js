const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const VerifyOTP = require("./verifyOTP");
const ResetPassword = async (req, res) => {
  const { userID, newPassword } = req.body;
  const user = await User.findById({ _id: userID });

  if (!user) {
    throw Error("User does not exist");
  } else {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = await bcrypt.hashSync(newPassword, salt);
      user.password = hashedPassword;
      await user.save();
      return res
        .status(200)
        .send({ message: "Your password has been changed succsfully" });
    } catch (error) {
      console.log(error);
      throw Error("Password update failed");
    }
  }
};

module.exports = ResetPassword;
