const User = require("../../models/user.js");
const moongose = require("mongoose");
const Order = require("../../models/Order");
const OrderModel = moongose.model("Order", Order);
const getCardInformation = async (req, res, next) => {
  try {
    const { userID, OrderID, CardInfo } = req.body;
    const user = await User.findById(userID);
    const order = await OrderModel.findById(OrderID);
    if (order.products.length < 1) {
      res.json({ message: "Cannot place an empty order!" });
    } else {
      order.cardHolderName = CardInfo.cardName;
      order.cardNumber = CardInfo.cardNumber;
      order.cvcCode = CardInfo.cardCvc;
      order.expirationDate = CardInfo.cardExpiry;
      order.totalPrice = CardInfo.totalPrice;
      order.orderState = "Confirmed";
      order.save();
      user.userOrder = order;
      user.save();
      res.json({ message: "Your Order has been Placed Succssfully !" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Somthing went Wrong ,Please enter a valid Card Information",
    });
  }
};
module.exports = getCardInformation;
