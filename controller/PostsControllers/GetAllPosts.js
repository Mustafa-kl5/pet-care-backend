const postModle = require("../../models/NormalPost");

const getAllPost = async (req, res) => {
  try {
    const posts = await postModle.find().populate("author", "userImage");
    const postToSend = [];

    posts.map((post) => {
      postToSend.push({
        postID: post._id,
        ownerImage: post.author.userImage,
        postImage: post.Images[0],
        postOwner: post.postOwner,
        postType: post.postType,
      });
    });

    res.status(201).send(postToSend);
  } catch (error) {
    res.status(401).json({ massage: "failed to get posts" });
  }
};
module.exports = getAllPost;
