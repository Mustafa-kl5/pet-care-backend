const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserOTPSchema = new Schema({
  otpCode: { type: String },
  ExpireAt: {
    type: Date,
    default: Date.now,
  },
});
const UserOTP = mongoose.model("UserOTP", UserOTPSchema);
module.exports = UserOTP;
