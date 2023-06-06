const Product = require("../../models/Products");
const mongoose = require("mongoose");

const ProductModel = mongoose.model("Product", Product);

const fetchProductData = async (req, res) => {
  try {
    const products = await ProductModel.find();

    res.json({ data: products });
  } catch (error) {
    console.log(error);
    res.json({ message: "Something went wrong" });
  }
};

module.exports = fetchProductData;
