const { Int32 } = require("mongodb");
const mongoose = require("mongoose");
const image = require("../models/image");
const ProductsSchema = new mongoose.Schema({
  animalType: { type: String, required: true },
  productName: { type: String, required: true },
  productType: { type: String, required: true },
  productPrice: { type: String, required: true },
  productQuntity: { type: Number, require: true },
  productImages: [image],
});

module.exports = ProductsSchema;
