const mongoose = require("mongoose");
const User = require("../../models/user.js");
const Order = require("../../models/Order.js");
const OrderModel = mongoose.model("Order", Order);
const Product = require("../../models/Products.js");
const ProductModel = mongoose.model("Product", Product);
const fetchSelectedProducts = async (req, res) => {
  try {
    const { ProductID, ProductQuantity } = req.body;
    let userId = req.user.userId;
    const user = await User.findById(userId);
    const Product = await ProductModel.findById(ProductID);
    if (!user.userOrder) {
      const order = new OrderModel();
      order.products.push({
        ProductQuantity: ProductQuantity,
        Product: Product,
      });
      await order.save();
      user.userOrder = order;
      await user.save();
      return res.json({
        message: "Order Has been Created,Product has been added to your cart!",
      });
    }

    const ExistOrder = await OrderModel.findById(user.userOrder._id);
    if (!ExistOrder) {
      return res.json({ message: "Something Went wrong!" });
    }
    let exist = false;
    for (let i = 0; i < ExistOrder.products.length; i++) {
      if (ExistOrder.products[i].Product.id === ProductID) {
        exist = true;
        break;
      }
    }
    if (exist) {
      return res.json({
        message: "Product is already exist on your pasket!",
      });
    }
    ExistOrder.products.push({
      ProductQuantity: ProductQuantity,
      Product: Product,
    });
    await ExistOrder.save();
    user.userOrder = ExistOrder;
    await user.save();
    res.json({ message: "A Product has been added to your Cart!" });
  } catch (error) {
    console.log(error.message);
    return res.json({ message: "Something Went Wrong , Please Try Again" });
  }
};
module.exports = fetchSelectedProducts;
