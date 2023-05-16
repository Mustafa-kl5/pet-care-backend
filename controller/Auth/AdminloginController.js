const Admin = require("../../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AdminloginController = async (req, res) => {
  const { email, password } = req.body;
  // const salt = bcrypt.genSaltSync(10);
  // const hashedPassword = await bcrypt.hashSync(password, salt);
  // // const admin = await Admin.create({
  // //   firstName: firstName,
  // //   lastName: lastName,
  // //   email: email,
  // //   password: hashedPassword,
  // // });
  // // admin.save();

  const admin = await Admin.findOne({ email: email });

  if (!admin) {
    return res
      .status(401)
      .json({ message: "Wrong email, please try again", auth: false });
  }

  const isPassword = await bcrypt.compare(password, admin.password);
  if (!isPassword) {
    return res
      .status(401)
      .json({ message: "Wrong password, please try again", auth: false });
  }

  const token = jwt.sign({ AdminId: admin._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  res.json({ token: token, auth: true });
};
module.exports = AdminloginController;
