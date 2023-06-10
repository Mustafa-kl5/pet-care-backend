const User = require("../../models/user.js");
const mongoose = require("mongoose");
const Order = require("../../models/Order");
const OrderModel = mongoose.model("Order", Order);
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
  if (total > user.BankAccount) {
    order.orderState = "";
    order.totalPrice = 0;
    order.save();
    return;
  }
  order.orderState = "Confirmed";
  order.totalPrice = total;
  order.save();
  const orderIndex = user.userOrder.findIndex((orderID) =>
    orderID.equals(orderId)
  );
  if (orderIndex !== -1) {
    user.userOrder[orderIndex] = order;
    user.BankAccount = user.BankAccount - total;
    user.save();
  }
  console.log(orderIndex, orderId);
};
module.exports = UpdatePaymentSuccsess;
