const User = require("../../../models/user");
const mongoose = require("mongoose");
const OrderHistory = require("../../../models/OrderHistory");
const OrderHistoryModel = mongoose.model("OrderHistory", OrderHistory);
const getOrders = async (req, res) => {
  const ConfirmedOrders = await OrderHistoryModel.find();
  res.json(ConfirmedOrders);
};
module.exports = getOrders;
