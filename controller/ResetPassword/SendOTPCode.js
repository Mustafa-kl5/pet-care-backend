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
      from: "armousa19@cit.just.edu.jo",
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
