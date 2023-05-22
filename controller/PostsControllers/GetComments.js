const postModle = require("../../models/NormalPost");
const mongoose = require("mongoose");
const User = require("../../models/user");
const getComments = async (req, res) => {
  const idFromUrl = req.params.id;
  const postId = idFromUrl.replace(/:/g, "");
  try {
    const post = await postModle.findById(postId, "postcomments");

    const commentPromises = post.postcomments.map(async (item) => {
      const user = await User.findById(
        item.commentOwner,
        "userImage firstName lastName"
      );

      return {
        commentOwner: `${user.firstName} ${user.lastName}`,
        ownerImage: user.userImage,
        commentDescription: item.commentDescription,
        commentTime: item.commentTime,
      };
    });

    const comments = await Promise.all(commentPromises);
    res.status(200).send(comments);
  } catch (error) {
    res.status(401).json({ message: "failed to get post" });
  }
};

module.exports = getComments;
