const User = require("../../../models/user");
const mongoose = require("mongoose");
const OrderHistory = require("../../../models/OrderHistory");
const OrderHistoryModel = mongoose.model("OrderHistory", OrderHistory);
const setOrderState = async (req, res) => {
  try {
    const { OrderState, OrderID } = req.body;
    const Order = await OrderHistoryModel.findById(OrderID);
    Order.Order.orderState = OrderState;
    Order.save();
    res.json({ message: "State has been changed" });
  } catch (error) {
    console.log(error);
    res.json({ message: "somthing went wrong!" });
  }
};
module.exports = setOrderState;
