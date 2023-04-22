const mongoose = require("mongoose");
const postImages = require("./image");
const postLike = require("./NormalPostLike");
const postComment = require("./NormalPostComment");
const postSchema = new mongoose.Schema({
  postID: {
    type: mongoose.Schema.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  Images: [postImages],
  description: { type: String, required: true },
  postcomments: [postComment],
  postOwner: { type: String, required: true },
  postType: { type: String, required: true },
  postLikes: [postLike],
  postTime: {
    type: Date,
    default: new Date(),
  },
});

module.exports = postSchema;
