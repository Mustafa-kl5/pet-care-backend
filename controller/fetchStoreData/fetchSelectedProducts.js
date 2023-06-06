const mongoose = require("mongoose");
const User = require("../../models/user.js");
const Product = require("../../models/Products.js");
const Order = require("../../models/Order.js");
const OrderModel = mongoose.model("Order", Order);
const ProductModel = mongoose.model("Product", Product);
const fetchSelectedProducts = async (req, res) => {
  try {
    const { ProductID, ProductQuintity } = req.body;
    let userId = req.user.userId;
    const user = await User.findById(userId);
    const product = await ProductModel.findById(ProductID);
    product.productQuntity = ProductQuintity;
    product.save();
    if (
      !user.userOrder ||
      !user.userOrder.length ||
      user.userOrder[user.userOrder.length - 1].orderState !== ""
    ) {
      const newOrder = new OrderModel();
      newOrder.products.push(product);
      newOrder.totalPrice = "";
      await newOrder.save();
      user.userOrder.push(newOrder);
      await user.save();
      res.json({ message: "A Product has been added to your Cart!" });
    } else {
      const orderId = user.userOrder[user.userOrder.length - 1];
      const order = await OrderModel.findById(orderId);
      if (!order) {
        res.status(404).json({ message: "Order not found" });
      } else {
        let exist = false;
        for (let i = 0; i < order.products.length; i++) {
          if (order.products[i].id === product.id) {
            exist = true;
            break;
          }
        }
        if (exist) {
          res.json({ message: "Product is already exist on your pasket!" });
        } else {
          order.products.push(product);
          await order.save();
          user.userOrder[user.userOrder.length - 1] = order;
          await user.save();
          res.json({ message: "A Product has been added to your Cart!" });
        }
      }
    }
  } catch (error) {
    console.log(error.message);
    res.json({ message: "Somthing Went Wrong , Please Try Again" });
  }
};
module.exports = fetchSelectedProducts;
