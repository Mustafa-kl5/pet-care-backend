const upLoadSingleImage = require("../../imageServise/UpLoadSingleImage");
const User = require("../../models/user");
const fs = require("fs");

const changeUserImage = async (req, res) => {
  const idFromUrl = req.params.id;
  const userId = idFromUrl.replace(/:/g, "");
  const { userImageToUpload } = req.body;
  try {
    const user = await User.findById(userId, "userImage firstName");

    upLoadSingleImage(userImageToUpload, user.firstName)
      .then(async (imageURL) => {
        user.userImage = imageURL;
        await user.save();
      })
      .catch((error) => {
        res.send("Error uploading image:", error);
      });

    res.send(user);
  } catch (error) {
    res.json({ errorMessage: "Failed to change user image" });
  }
};
module.exports = changeUserImage;
