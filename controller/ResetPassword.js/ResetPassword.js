const userModle = require("../../models/user");
const bcrypt = require("bcrypt");
const resetPassword = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModle.findOne({ email });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    user.password = hashedPassword;
    await user.save();
    res.status(201).json({
      massage: "Password Reset Successfully Changed",
      isSuccess: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({ massage: "Internal Server Error", isSuccess: false });
  }
};

module.exports = resetPassword;
