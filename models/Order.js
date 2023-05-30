const mongoose = require("mongoose");
const ProductsSchema = require("./Products");
const orderSchema = new mongoose.Schema({
  products: [ProductsSchema],
  cardNumber: { type: String },
  expirationDate: { type: String },
  cvcCode: { type: String },
  cardHolderName: { type: String },
  totalPrice: { type: Number },
  orderState: { type: String },
});

module.exports = orderSchema;
