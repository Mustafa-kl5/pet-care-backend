const postModel = require("../../models/AdoptionPost");

const changeAdoptionPostStatus = async (req, res) => {
  const idFromUrl = req.params.id;
  const postID = idFromUrl.replace(/:/g, "");
  const { userId } = req.user;
  try {
    const post = await postModel.findById(postID, "status author");

    if (post.author._id.toString() === userId) {
      post.status = !post.status;
      await post.save();
      res.status(200).json({ message: "Post status changed successfully" });
    } else {
      res.status(200).json({ message: "cant change Post status" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = changeAdoptionPostStatus;
