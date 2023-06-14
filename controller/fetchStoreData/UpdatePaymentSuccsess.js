const User = require("../../models/user.js");
const mongoose = require("mongoose");
const Order = require("../../models/Order");
const OrderModel = mongoose.model("Order", Order);
const OrderHistory = require("../../models/OrderHistory.js");
const OrderHistoryModel = mongoose.model("OrderHistory", OrderHistory);
const UpdatePaymentSuccsess = async (req, res) => {
  const userId = req.userId;
  const orderId = req.orderId;
  let total = req.total;
  const order = await OrderModel.findById(orderId);
  const user = await User.findById(userId);
  total = Number(String(total).slice(0, -2));
  if (!userId && !orderId && !total) {
    return;
  }
  order.totalPrice = total;
  order.orderState = "Confirmed";
  await order.save();
  const OrderHistory = new OrderHistoryModel();
  OrderHistory.Order = order;
  OrderHistory.userID = userId;
  OrderHistory.save();
  order.products = [];
  order.totalPrice = 0;
  order.orderState = "Pending";
  order.save();
  user.userOrder = order;
  user.save();
  return res.json({ message: "Done!" });
};
module.exports = UpdatePaymentSuccsess;
