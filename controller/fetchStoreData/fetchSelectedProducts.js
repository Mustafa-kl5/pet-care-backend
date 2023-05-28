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
    if (!user.userOrder) {
      const order = new OrderModel();
      order.products.push(product);
      order.cvcCode = "";
      order.cardHolderName = "";
      order.cardNumber = "";
      order.expirationDate = "";
      order.totalPrice = "";
      await order.save();
      user.userOrder = order;
      await user.save();
      res.json({ message: "A Product has been added to your Cart!" });
    } else {
      const order = await OrderModel.findById(user.userOrder);
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
          user.userOrder = order;
          await user.save();
          res.json({ message: "A Product has been added to your Cart!" });
        }
      }
    }
  } catch (error) {
    res.json({ message: "Somthing Went Wrong , Please Try Again" });
  }
};
module.exports = fetchSelectedProducts;
