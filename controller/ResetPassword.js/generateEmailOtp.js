const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const { emailTemplet } = require("../../assest/emailTemplet");

dotenv.config();
const Email = process.env.NODEMAILER_ACCOUT;
const Password = process.env.NODEMAILER_PASSWORD;

const generateEmailOtp = async (req, res) => {
  const data = req.data;
  let nodmailerConfig = {
    service: "gmail",
    auth: {
      user: Email,
      pass: Password,
    },
  };
  let transporter = nodemailer.createTransport(nodmailerConfig);
  try {
    let massage = {
      from: Email,
      to: data.email,
      subject: "Hello ✔",
      text: `Your OTP Code For Password Reset `,
      html: emailTemplet(data.otp),
    };
    transporter
      .sendMail(massage)
      .then(() => {
        res.status(201).json({
          massage: "We Send OTP To Your Email",
          otpId: data.otpId,
          isSuccess: true,
        });
      })
      .catch((error) => {
        res
          .status(500)
          .json({ massage: "Could Not Sent OTP Code", isSuccess: false });
      });
  } catch (error) {
    res
      .status(500)
      .json({ massage: "Internal Server Error0", isSuccess: false });
  }
};

module.exports = generateEmailOtp;
