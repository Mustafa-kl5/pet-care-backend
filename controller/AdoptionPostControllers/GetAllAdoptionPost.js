const mongoose = require("mongoose");
const postModle = require("../../models/AdoptionPost");

const getAllAdoptionPost = async (req, res) => {
  try {
    const posts = [];
    const post = await postModle
      .find(
        {},
        {
          Images: 1,
          animalBreed: 1,
          animalType: 1,
          animalName: 1,
          author: 1,
          City: 1,
          postOwner: 1,
          _id: 1,
        }
      )
      .populate("author", "userImage");

    post.map((post) => {
      posts.push({
        postOwner: post.postOwner,
        animalType: post.animalType,
        animalBreed: post.animalBreed,
        animalName: post.animalName,
        city: post.City,
        postImage: post.Images[0],
        postOwnerImage: post.author.userImage,
        postId: post._id,
      });
    });

    res.status(201).send(posts);
  } catch (error) {
    res.status(401).send("Error to add post");
  }
};
module.exports = getAllAdoptionPost;
