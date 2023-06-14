const mongoose = require("mongoose");
const User = require("../../models/user.js");
const Order = require("../../models/Order.js");
const OrderModel = mongoose.model("Order", Order);
const Product = require("../../models/Products");
const ProductModel = mongoose.model("Product", Product);

const deletProducts = async (req, res) => {
  try {
    const { OrderId, ProductId, userID } = req.body;
    const order = await OrderModel.findById(OrderId);
    const product = await ProductModel.findById(ProductId);
    const user = await User.findById(userID);
    const productIndex = order.products.findIndex(
      (p) => String(p._id) === String(ProductId)
    );
    if (productIndex !== -1) {
      order.products.splice(productIndex, 1);
      await order.save();
    }
    await order.save();
    user.userOrder = order;
    await user.save();
    res.json({ order, product, user });
  } catch (error) {
    res.json({ message: "error" });
  }
};
module.exports = deletProducts;
