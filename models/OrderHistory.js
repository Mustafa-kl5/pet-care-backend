//[Order] orderId Order
const mongoose = require("mongoose");
const Order = require("../models/Order");
const OrderHistory = new mongoose.Schema({
  Order: Order,
  userID: { type: String },
});
module.exports = OrderHistory;
