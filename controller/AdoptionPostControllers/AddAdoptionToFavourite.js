const postModle = require("../../models/AdoptionPost");
const mongoose = require("mongoose");
const userModel = require("../../models/user");
const addAdoptionToFavourite = async (req, res) => {
  const { userId } = req.user;
  try {
    const idFromUrl = req.params.id;
    const postId = idFromUrl.replace(/:/g, "");
    const user = await userModel.findById(userId, "favouriteAdoptionPosts");

    if (user.favouriteAdoptionPosts.some((item) => item === postId)) {
      user.favouriteAdoptionPosts.pull(postId);
    } else {
      user.favouriteAdoptionPosts.push(postId);
    }
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(401).json({ massage: "error to add post to favorites" });
  }
};
module.exports = addAdoptionToFavourite;
