const User = require("../../../models/user");
const mongoose = require("mongoose");
const Order = require("../../../models/Order");
const orderModel = mongoose.model("Order", Order);
const getOrders = async (req, res) => {
  const users = await User.find({ userOrder: { $exists: true } });
  const Orders = users.filter((ele) => ele.userOrder.orderState);
  res.json({ userOrder: Orders });
};
module.exports = getOrders;
