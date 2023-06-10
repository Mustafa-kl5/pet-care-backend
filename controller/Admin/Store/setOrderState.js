const User = require("../../../models/user");
const mongoose = require("mongoose");
const Order = require("../../../models/Order");
const OrderModel = mongoose.model("Order", Order);
const setOrderState = async (req, res) => {
  try {
    const {OrderState,OrderID } = req.body;
    const Order = await OrderModel.findById(OrderID);
    Order.orderState=OrderState;
    Order.save ();
    const user = await User.findOneAndUpdate(
      { userOrder: { $elemMatch: { _id: OrderID } } },
      { $set: { "userOrder.$.orderState": OrderState } });
    res.json({ message: "State has been changed" });
  } catch (error) {
    console.log(error);
    res.json({ message: "somthing went wrong!" });
  }
};
module.exports = setOrderState;
