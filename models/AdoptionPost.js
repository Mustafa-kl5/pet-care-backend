const mongoose = require("mongoose");
const postImages = require("./image");
const location = require("./Location");
const socialMedia = require("./SocialMedia");

const adoptionPostSchema = new mongoose.Schema({
  Images: [postImages],
  postTime: {
    type: Date,
    default: new Date(),
  },
  description: { type: String, required: true },
  postOwner: { type: String, required: true },
  ownerLocation: { type: location },
  ownerSocialMedia: { type: socialMedia },
  animalType: { type: String, required: true },
  animalBreed: { type: String, required: true },
  animalName: { type: String, required: true },
  status: { type: Boolean, required: true, default: false },
  City: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

module.exports = mongoose.model("adoption post", adoptionPostSchema);
