const mongoose = require("mongoose");
const socialMediaSchema = new mongoose.Schema({
  facebookLink: { type: String },
  phoneNumber: { type: String },
  whatsappLink: { type: String },
  _id: false,
});

module.exports = socialMediaSchema;
