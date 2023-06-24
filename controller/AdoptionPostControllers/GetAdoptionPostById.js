const mongoose = require("mongoose");
const postModle = require("../../models/AdoptionPost");
const userModel = require("../../models/user");

const getAdoptionPostById = async (req, res) => {
  const idFromUrl = req.params.id;
  const postId = idFromUrl.replace(/:/g, "");
  try {
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
    res.status(401).send("Error to get post");
  }
};
module.exports = getAdoptionPostById;
