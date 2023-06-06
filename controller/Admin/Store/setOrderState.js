const User = require("../../../models/user");
const mongoose = require("mongoose");
const Order = require("../../../models/Order");
const OrderModel = mongoose.model("Order", Order);
const setOrderState = async (req, res) => {
  try {
    const { userID, OrderID, OrderState } = req.body;
    const user = await User.findById(userID);
    const UpdatedOrder = await OrderModel.findById(OrderID);
    UpdatedOrder.orderState = OrderState;
    UpdatedOrder.save();
    user.userOrder = UpdatedOrder;
    user.save();
    res.json({ message: "State has been changed" });
  } catch (error) {
    console.log(error);
    res.json({ message: "somthing went wrong!" });
  }
};
module.exports = setOrderState;
