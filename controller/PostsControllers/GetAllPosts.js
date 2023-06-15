const postModle = require("../../models/NormalPost");

const getAllPost = async (req, res) => {
  try {
    const posts = await postModle
      .find(
        {},
        {
          Images: 1,
          author: 1,
          postOwner: 1,
          postType: 1,
          _id: 1,
        }
      )
      .populate("author", "userImage");

    const postToSend = [];
    posts.forEach((post) => {
      const ownerImage = post.author ? post.author.userImage : null;

      postToSend.push({
        postID: post._id,
        ownerImage: ownerImage,
        postImage: post.Images[0],
        postOwner: post.postOwner,
        postType: post.postType,
      });
    });

    res.status(201).send(postToSend);
  } catch (error) {
    res.status(401).json({ message: "Failed to get posts" });
  }
};

module.exports = getAllPost;
