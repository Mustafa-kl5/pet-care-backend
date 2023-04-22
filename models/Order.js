const mongoose = require("mongoose");
const product = require("./Product");

const orderSchema = new mongoose.Schema({
  products: [product],
  cardNumber: { type: String },
  expirationDate: { type: Date },
  cvcCode: { type: String },
  cardHolderName: { type: String },
});

module.exports = orderSchema;
