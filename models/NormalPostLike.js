const mongoose = require("mongoose");
const postLike = new mongoose.Schema({
  likeOwner: { type: String, required: true },
  _id: false,
});

module.exports = postLike;
