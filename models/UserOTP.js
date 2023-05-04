const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserOTPSchema = new Schema({
  userID: String,
  otp: String,
  createdAt: Date,
  ExpireAt: Date,
});
const UserOTP = mongoose.model("UserOTP", UserOTPSchema);
module.exports = UserOTP;
