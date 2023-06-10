const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  products: [{ ProductQuantity: Number, ProductId: String }],
  totalPrice: { type: Number },
  orderState: { type: String, default: "Pending" },
});
module.exports = orderSchema;
