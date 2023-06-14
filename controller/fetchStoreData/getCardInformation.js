const User = require("../../models/user.js");
const moongose = require("mongoose");
const Order = require("../../models/Order");
const OrderModel = moongose.model("Order", Order);
const getCardInformation = async (req, res, next) => {
  try {
    const { userID, OrderID, email } = req.body;
    const order = await OrderModel.findById(OrderID);
    req.user = userID;
    req.order = order;
    req.email = email;
    next();
  } catch (error) {
    res.status(500).json({
      message: "Somthing went Wrong ,Please enter a valid Card Information",
    });
  }
};
module.exports = getCardInformation;
