const UserOTP = require("../../models/UserOTP.js");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const sendgrid = require("nodemailer-sendgrid-transport");
const transporter = nodemailer.createTransport(
  sendgrid({
    auth: {
      api_key:
        "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",
    },
  })
);
const SendOTPCode = async ({ id, email }, res) => {
  try {
    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
    const salt = await bcrypt.genSalt(10);
    const hashedOTP = await bcrypt.hash(otp, salt);

    const newUserOTP = await new UserOTP({
      userID: id,
      otp: hashedOTP,
      createdAt: Date.now(),
      ExpireAt: Date.now() + 30000,
    });
    console.log(newUserOTP);
    await newUserOTP.save();
    await transporter.sendMail({
      from: "subaruk898@gmail.com",
      to: email,
      subject: "Your OTP code is :",
      html: `<p>Your OTP Code For Today is <b style="color:red;">${otp}</b></p>`,
    });
    res.json({
      state: "Pending",
      message: "OTP Code has been sent to your email!",
      data: {
        userID: id,
        email,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = SendOTPCode;
