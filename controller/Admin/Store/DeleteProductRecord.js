const Product = require("../../../models/Products");
const mongoose = require("mongoose");
const ProductModel = mongoose.model("Product", Product);
const DeleteProductRecord = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await ProductModel.deleteOne({ _id: productId });
    product.save();
    res.json({ message: "Done!" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Something Wrong" });
  }
};
module.exports = DeleteProductRecord;
