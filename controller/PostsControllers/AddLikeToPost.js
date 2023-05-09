const postModle = require("../../models/NormalPost");
const mongoose = require("mongoose");
const likeSchema = require("../../models/NormalPostLike");
const likeModle = mongoose.model("like", likeSchema);
const addLikeToPost = async (req, res) => {
  const { userId } = req.user;
  try {
    const idFromUrl = req.params.id;
    const postId = idFromUrl.replace(/:/g, "");
    const post = await postModle.findById(postId).exec();

    const like = new likeModle({
      likeOwner: userId,
    });

    if (post.postLikes.some((item) => item.likeOwner === userId)) {
      post.postLikes.pull(like);
    } else {
      post.postLikes.push(like);
    }
    await post.save();
    res.status(201).json({ likeNumber: post.postLikes.length });
  } catch (error) {
    res.status(401).json({ massage: "failed to get post" });
  }
};
module.exports = addLikeToPost;
