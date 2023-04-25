const User = require("../models/user");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
dotenv.config();

const registrationController = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    city,
    address,
    dayOfBirth,
    monthOfBirth,
    yearOfBirth,
  } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(201).send({ message: "User already exists" });
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
    birthDay: `${monthOfBirth}/${dayOfBirth}/${yearOfBirth}`,
  });
  try {
    const savedUser = await user.save();
    res.status(201).send({ message: "100% sjalt ya kbyr " });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = {
  registrationController,
};
