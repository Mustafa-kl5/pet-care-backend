const mongoose = require("mongoose");
const User = require("../../models/user.js");
const Order = require("../../models/Order.js");
const OrderModel = mongoose.model("Order", Order);
const Product = require("../../models/Products");
const ProductModel = mongoose.model("Product", Product);

const deletProducts = async (req, res) => {
  try {
    const { OrderId, ProductId, userID } = req.body;
    const order = await OrderModel.findById({ _id: OrderId });
    const product = await ProductModel.findById({ _id: ProductId });
    const user = await User.findById(userID);
    order.products.pop(product);
    order.save();
    user.userOrder = order;
    user.save();
    res.json({ order, product, user: user });
  } catch (error) {
    res.json({ message: "error" });
  }
};
module.exports = deletProducts;
