const User = require("../../models/user");
const bcrypt = require("bcrypt");
const ResetPassword = async (req, res) => {
  const { userID, newPassword } = req.body;
  const user = await User.findById({ _id: userID });
  try {
    if (!user) {
      res.json({ message: "Wrong Gmail ,Please Try again" });
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = await bcrypt.hashSync(newPassword, salt);
      user.password = hashedPassword;
      await user.save();
      return res.json({ message: "Your password has been changed succsfully" });
    }
  } catch (error) {
    res.json({ message: "Somthing Went Wrong !Please Try Again" });
    console.log(error);
  }
};

module.exports = ResetPassword;
