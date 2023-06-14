const postModel = require("../../models/AdoptionPost");
const User = require("../../models/user");
const getFavouriteAdoptionPost = async (req, res) => {
  const { userId } = req.user;

  try {
    const user = await User.findById(userId, "favouriteAdoptionPosts");

    const favoritePosts = await postModel
      .find(
        {
          _id: { $in: user.favouriteAdoptionPosts },
        },
        "postOwner Images"
      )
      .populate("author", "userImage");

    res.send(favoritePosts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = getFavouriteAdoptionPost;
