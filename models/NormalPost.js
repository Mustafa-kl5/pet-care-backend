const mongoose = require("mongoose");
const postImages = require("../models/image");
const postLike = require("../models/NormalPostLike");
const postComment = require("../models/NormalPostComment");
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

const post = mongoose.model("post", postSchema);

module.exports = post;
