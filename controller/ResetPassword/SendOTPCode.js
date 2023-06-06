const UserOTP = require("../../models/UserOTP.js");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const sendgrid = require("nodemailer-sendgrid-transport");
dotenv.config();
const transporter = nodemailer.createTransport(
  sendgrid({
    auth: {
      api_key: process.env.NodeMailerAPI,
    },
  })
);
const SendOTPCode = async ({ id, email }, res) => {
  try {
    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
    const salt = await bcrypt.genSalt(10);
    const hashedOTP = await bcrypt.hash(otp, salt);
    const newUserOTP = new UserOTP({
      userID: id,
      otp: hashedOTP,
      createdAt: Date.now(),
      ExpireAt: Date.now() + 300000,
    });
    console.log(newUserOTP);
    await newUserOTP.save();
    await transporter.sendMail({
      from: "xosedethlexa@gmail.com",
      to: email,
      subject: "Your OTP code is :",
      html: `<p>Your OTP Code For Today is <b style="color:red;">${otp}</b></p>`,
    });
    res.json({
      message: "OTP Code has been sent to your email!",
      data: {
        userID: id,
        email,
      },
    });
  } catch (error) {
    res.json({
      message: "Somthing Wnet Wrong , Please try Again",
    });
  }
};
module.exports = SendOTPCode;
