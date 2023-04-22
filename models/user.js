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
  userImage: { type: String },
  phoneNumber: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  normalPosts: [normalPost],
  adoptionPosts: [adoptionPost],
  bio: { type: String },
  userOrder: { type: order },
  favouritePosts: [normalPost],
  favouriteAdoptionPosts: [adoptionPost],
});

module.exports = mongoose.model("user", userSchema);
