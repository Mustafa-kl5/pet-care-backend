const mongoose = require("mongoose");
const normalPost = require("./NormalPost");
const adoptionPost = require("./AdoptionPost");
const Order = require("./Order");
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
  // normalPosts: [normalPost],
  adoptionPosts: [adoptionPost],
  bio: { type: String },
  userOrder: [Order],
  // favouritePosts: [normalPost],
  favouriteAdoptionPosts: [adoptionPost],
  BankAccount: { type: Number, default: 2000 },
});

module.exports = mongoose.model("user", userSchema);
