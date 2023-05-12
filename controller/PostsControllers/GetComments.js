const postModle = require("../../models/NormalPost");
const mongoose = require("mongoose");
const User = require("../../models/user");
const getComments = async (req, res) => {
  const idFromUrl = req.params.id;
  const postId = idFromUrl.replace(/:/g, "");
  try {
    const post = await postModle.findById(postId, "postcomments author");
    const user = await User.findById(
      post.author,
      "userImage firstName lastName"
    );
    res.status(201).json({
      postComments: post.postcomments,
      commentOwnerImage: user.userImage,
      commentOwnerName: `${user.firstName + " " + user.lastName}`,
    });
  } catch (error) {
    res.status(401).json({ massage: "failed to get post" });
  }
};
module.exports = getComments;
