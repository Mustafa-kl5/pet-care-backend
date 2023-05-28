const User = require("../../models/user.js");
const fetchProdcutsToPasket = async (req, res) => {
  try {
    let userId = req.user.userId;
    const user = await User.findById(userId);
    res.json({ Order: user.userOrder, userID: userId });
  } catch (error) {
    res.json({ message: "Somthing Wrong!" });
  }
};
module.exports = fetchProdcutsToPasket;
