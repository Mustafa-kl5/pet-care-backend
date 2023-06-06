const postModel = require("../../models/NormalPost");
const uploadImage = require("../../imageServise/ImageUpload");
const updateNormalPost = async (req, res) => {
  const idFromUrl = req.params.id;
  const postID = idFromUrl.replace(/:/g, "");
  const { userId } = req.user;
  const { postType, postDescription, images } = req.body;
  try {
    const post = await postModel.findById(postID, "author");
    if (post.author._id.toString() === userId) {
      const newImage = await uploadImage(images, "NormalPostImages");
      post.Images = newImage;
      post.postType = postType;
      post.description = postDescription;
      await post.save();

      res.status(200).json({ message: "Post updated successfully" });
    } else {
      res.status(200).json({ message: "You are not authenticated to do that" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = updateNormalPost;
