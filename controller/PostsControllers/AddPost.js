const imageSchema = require("../../models/image");
const postModle = require("../../models/NormalPost");
const User = require("../../models/user");
const mongoose = require("mongoose");
const imageModle = mongoose.model("images", imageSchema);
const uploadImage = require("../../imageServise/ImageUpload");

const addPost = async (req, res) => {
  const { userId } = req.user;
  const { postDescription, postType, images } = req.body;
  try {
    const user = await User.findById(userId, "firstName lastName _id");
    const postImage = await uploadImage(images);

    const post = new postModle({
      postType: postType,
      description: postDescription,
      author: user._id,
      postOwner: `${user.firstName} ${user.lastName}`,
      Images: postImage,
    });

    await post.save();
    res.status(201).send(post);
  } catch (error) {
    res.status(401).send("Error to add post");
  }
};
module.exports = addPost;
