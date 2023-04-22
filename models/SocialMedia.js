const mongoose = require("mongoose");
const socialMediaSchema = new mongoose.Schema({
  facebookLink: { type: String },
  phoneNumber: { type: String },
  whatsappLink: { type: String },
});

const socialMedia = mongoose.model("socialMedia", socialMediaSchema);

module.exports = socialMedia;
