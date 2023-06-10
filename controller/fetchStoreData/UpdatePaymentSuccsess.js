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
    res.status(400).json({ message: "Something Went Wrong!Please Try Again!" });
  }
  const order = await OrderModel.findById(orderId);
  const user = await User.findById(userId);
  if (total > user.BankAccount) {
    return res.json({
      message: "You don't have enough money to complete that payment !",
    });
  }
  order.orderState = "Confirmed";
  order.totalPrice = total;
  order.save();
  user.userOrder[user.userOrder.length - 1] = order;
  user.BankAccount = user.BankAccount - total;
  console.log(user.BankAccount, total);
  user.save();
};
module.exports = UpdatePaymentSuccsess;
