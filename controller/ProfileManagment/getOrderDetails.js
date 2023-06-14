const User = require("../../models/user");
const mongoose = require("mongoose");
const OrderHistory = require("../../models/OrderHistory");
const OrderHistoryModel = mongoose.model("OrderHistory", OrderHistory);
const getOrderDetails = async (req, res) => {
  let userID = req.user.userId;
  const userOrders = await OrderHistoryModel.find({ userID: userID });
  if (!userOrders) {
    return res.json({ userOrders: [], state: false });
  }
  res.json({ userOrder: userOrders, state: true });
};
module.exports = getOrderDetails;
