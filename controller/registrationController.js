const User = require("../models/user");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
dotenv.config();

const registrationController = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, password, city, address } =
    req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = new User({
    firstName,
    lastName,
    email,
    phoneNumber,
    password: hashedPassword,
    city,
    address,
  });
  try {
    const savedUser = await user.save();

    // const token = jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET, {
    //   expiresIn: "24h",
    // });

    res.json({ massage: "100% sjalt ya kbyr " });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  registrationController,
};
