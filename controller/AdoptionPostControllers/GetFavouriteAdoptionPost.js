const postModle = require("../../models/AdoptionPost");
const mongoose = require("mongoose");
const userModel = require("../../models/user");
const getFavouriteAdoptionPost = async (req, res) => {
  try {
    const idFromUrl = req.params.id;
    const userId = idFromUrl.replace(/:/g, "");
    const user = await userModel.findById(userId, "favouriteAdoptionPosts");
    res.send(user);
  } catch (error) {
    res.status(401).json({ massage: "failed to get post" });
  }
};
module.exports = getFavouriteAdoptionPost;
