const Product = require("../../models/Products.js");
const Order = require("../../models/Order.js");
const mongoose = require("mongoose");
const ProductModel = mongoose.model("Product", Product);
const fetchSelectedProducts = async (req, res) => {
  try {
    // const { userId } = req.user;
    const { ProductID } = req.body;
    const product = await ProductModel.findById(ProductID);
    res.json({ product: product, message: "Done!" });
  } catch (error) {
    res.json({ message: "Not Okay" });
  }
};
module.exports = fetchSelectedProducts;
