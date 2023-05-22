const User = require("../../models/user");

const getProfilePicture = async (req, res) => {
  const idFromUrl = req.params.id;
  const userId = idFromUrl.replace(/:/g, "");
  try {
    const user = await User.findById(userId, "userImage");
    res.send(user);
  } catch (error) {
    res.json({ errorMassage: "cant get user image" });
  }
};
module.exports = getProfilePicture;
