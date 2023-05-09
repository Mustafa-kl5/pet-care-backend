const postModle = require("../../models/NormalPost");

const getNumberOfLikes = async (req, res) => {
  try {
    const idFromUrl = req.params.id;
    const postId = idFromUrl.replace(/:/g, "");
    const post = await postModle.findById(postId).exec();
    res
      .status(201)
      .json({ likeNumber: post.postLikes.length, likeList: post.postLikes });
  } catch (error) {
    res.status(401).json({ massage: "failed to get post" });
  }
};
module.exports = getNumberOfLikes;
