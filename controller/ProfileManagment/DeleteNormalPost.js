const postModel = require("../../models/NormalPost");

const deleteNormalPost = async (req, res) => {
  const idFromUrl = req.params.id;
  const postID = idFromUrl.replace(/:/g, "");
  const { userId } = req.user;
  try {
    const post = await postModel.findById(postID, "author");

    if (post.author._id.toString() === userId) {
      const deletedPost = await postModel.findByIdAndRemove(postID);
      if (!deletedPost) {
        res.status(404).json({ error: "Post not found" });
      }
    }
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = deleteNormalPost;
