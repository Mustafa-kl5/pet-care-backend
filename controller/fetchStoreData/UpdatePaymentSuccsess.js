const User = require("../../models/user.js");
const mongoose = require("mongoose");
const Order = require("../../models/Order");
const OrderModel = mongoose.model("Order", Order);
const UpdatePaymentSuccsess = async (req, res) => {
  const userId = req.userId;
  const orderId = req.orderId;
  let total = req.total;
  total = Number(String(total).slice(0, -2));
  if (!userId && !orderId && !total) {
    res.status(400).json({ message: "Somthing Went Wrong!Please Try Again!" });
  }
  const order = await OrderModel.findById(orderId);
  order.orderState = "Confirmed";
  order.totalPrice = total;
  order.save();
  const user = await User.findById(userId);
  user.userOrder[user.userOrder.length - 1] = order;
  user.BankAccount = user.BankAccount - total;
  user.save();
};
module.exports = UpdatePaymentSuccsess;
