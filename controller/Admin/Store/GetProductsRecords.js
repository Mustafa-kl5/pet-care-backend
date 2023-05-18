const Product = require("../../../models/Products");
const mongoose = require("mongoose");
const ProductModel = mongoose.model("Product", Product);
const GetProductRecords = async (req, res) => {
  try {
    const Products = await ProductModel.find();
    res.json({ data: Products, message: "!Done" });
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
};
module.exports = GetProductRecords;
