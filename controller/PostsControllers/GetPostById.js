const postModle = require("../../models/NormalPost");
const userModel = require("../../models/user");
const getPostById = async (req, res) => {
  try {
    const idFromUrl = req.params.id;
    const postId = idFromUrl.replace(/:/g, "");
    const post = await postModle.findById(postId);
    const authorId = post.author;
    const author = await userModel.findById(authorId, "userImage");
    const postWithAuthorImage = {
      ...post.toObject(),
      author: {
        ...author.toObject(),
        userImage: author.userImage,
      },
    };

    res.status(201).send(postWithAuthorImage);
  } catch (error) {
    res.status(401).json({ massage: "failed to get post" });
  }
};
module.exports = getPostById;
