const mongoose = require("mongoose");
const postImages = require("./image");
const location = require("./Location");
const socialMedia = require("./SocialMedia");

const adoptionPostSchema = new mongoose.Schema({
  postID: {
    type: mongoose.Schema.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
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
  status: { type: Boolean, required: true },
});

const AdoptionPost = mongoose.model("adoptionPost", adoptionPostSchema);

module.exports = AdoptionPost;
