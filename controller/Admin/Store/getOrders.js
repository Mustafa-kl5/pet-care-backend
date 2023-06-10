const User = require("../../../models/user");
const mongoose = require("mongoose");
const Order = require("../../../models/Order");
const orderModel = mongoose.model("Order", Order);
const getOrders = async (req, res) => {
  const ConfirmedOrders = await orderModel.find({ orderState: { $ne: "" } }); 
  res.json(ConfirmedOrders);
};
module.exports = getOrders;
