const mongoose = require("mongoose");
const normalPost = require("./NormalPost");
const adoptionPost = require("./AdoptionPost");
const order = require("./Order");

const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  birthDay: { type: String },
  City: { type: String },
  address: { type: String },
  userImage: {
    type: String,
    default:
      "https://drive.google.com/uc?export=view&id=1E3BnucRlTp-NGO-Za4HjUc8HktclTb-f",
  },
  phoneNumber: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: { type: String },
  userOrder: { type: order },
  // favouritePosts: [normalPost],
  favouriteAdoptionPosts: [String],
});

module.exports = mongoose.model("user", userSchema);
