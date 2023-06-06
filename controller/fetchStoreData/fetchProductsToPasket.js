const User = require("../../models/user.js");
const fetchProdcutsToPasket = async (req, res) => {
  try {
    let userId = req.user.userId;
    const user = await User.findById(userId);
    const userOrder = user.userOrder.filter((order) => order.orderState === "");
    res.json({ Order: userOrder[0], userID: userId });
  } catch (error) {
    res.json({ message: "Somthing Wrong!" });
  }
};
module.exports = fetchProdcutsToPasket;
