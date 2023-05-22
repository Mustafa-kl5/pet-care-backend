const postModle = require("../../models/NormalPost");
const mongoose = require("mongoose");
const commentSchema = require("../../models/NormalPostComment");
const commentModle = mongoose.model("comment", commentSchema);
const addComment = async (req, res) => {
  const idFromUrl = req.params.id;
  const postId = idFromUrl.replace(/:/g, "");
  const { userId } = req.user;
  const { comment } = req.body;
  try {
    const post = await postModle.findById(postId, "postcomments");
    const postComment = new commentModle({
      commentOwner: userId,
      commentDescription: comment,
    });
    post.postcomments.push(postComment);
    await post.save();
    res.status(201).send(post);
  } catch (error) {
    res.status(401).json({ massage: "failed to get post" });
  }
};
module.exports = addComment;
