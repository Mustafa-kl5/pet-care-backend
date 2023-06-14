const mongoose = require("mongoose");
const ProductsSchema = require("../models/Products");
const orderSchema = new mongoose.Schema({
  products: [
    {
      ProductQuantity: Number,
      Product: ProductsSchema,
    },
  ],
  totalPrice: { type: Number },
  orderState: { type: String, default: "Pending" },
});
module.exports = orderSchema;
