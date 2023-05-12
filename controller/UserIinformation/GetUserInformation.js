const postModle = require("../../models/NormalPost");
const User = require("../../models/user");
const getUserInformation = async (req, res) => {
  const idFromUrl = req.params.id;
  const userId = idFromUrl.replace(/:/g, "");
  try {
    const user = await User.findById(userId, "firstName lastName userImage");
    res.send(user);
  } catch (error) {
    res.status(401).send("Error to get user information post");
  }
};
module.exports = getUserInformation;
