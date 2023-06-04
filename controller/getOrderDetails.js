const User = require("../models/user");
const getOrderDetails = async (req, res) => {
  let userID = req.user.userId;
  const user = await User.findById(userID);
  const userState = user.userOrder.orderState;
  const userOrder = user.userOrder;
  if (!userState) {
    return res.json({ state: false });
  }
  res.json({ userOrder: userOrder, state: true });
};
module.exports = getOrderDetails;
