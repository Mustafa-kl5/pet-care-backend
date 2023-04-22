const mongoose = require("mongoose");
const image = require("./image");

const productSchema = new mongoose.Schema({
  productID: {
    type: mongoose.Schema.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  animalType: { type: String, required: true },
  productName: { type: String, required: true },
  productType: { type: String, required: true },
  productPrice: { type: String, required: true },
  productImages: [image],
});

const product = mongoose.model("product", productSchema);

module.exports = product;
