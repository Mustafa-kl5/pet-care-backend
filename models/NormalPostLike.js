const mongoose = require("mongoose");
const postLike = new mongoose.Schema({
  likeOwner: { type: String, required: true },
  likeTime: {
    type: Date,
    default: new Date(),
  },
});
const postsLike = mongoose.model("postLike", postLike);

module.exports = postsLike;
