const mongoose = require("mongoose");
const image = require("../models/image");
const ProductsSchema = new mongoose.Schema({
  animalType: { type: String, required: true },
  productName: { type: String, required: true },
  productType: { type: String, required: true },
  productPrice: { type: String, required: true },
  productImages: [image],
});
const Products = mongoose.model("Products", ProductsSchema);
module.exports = Products;
