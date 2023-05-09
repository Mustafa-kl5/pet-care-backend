const mongoose = require("mongoose");
const postImages = require("./image");
const postLike = require("./NormalPostLike");
const postComment = require("./NormalPostComment");
const postSchema = new mongoose.Schema({
  Images: [postImages],
  description: { type: String, required: true },
  postcomments: [postComment],
  postOwner: { type: String, required: true },
  postType: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  postLikes: [postLike],
  postTime: {
    type: Date,
    default: new Date(),
  },
});
const postModle = mongoose.model("post", postSchema);
module.exports = postModle;
