const User = require("../../models/user");
const getOrderDetails = async (req, res) => {
  let userID = req.user.userId;
  const user = await User.findById(userID);
  const userOrder = user.userOrder.filter((order) => order.orderState !== "");
  if (!userOrder) {
    return res.json({ userOrder: [], state: false });
  }
  res.json({ userOrder: userOrder, state: true });
};
module.exports = getOrderDetails;
