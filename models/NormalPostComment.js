const mongoose = require("mongoose");
const postComment = new mongoose.Schema({
  commentOwner: { type: String, required: true },
  commentTime: {
    type: Date,
    default: new Date(),
  },
  commentDescription: { type: String, required: true },
  _id: false,
});

module.exports = postComment;
