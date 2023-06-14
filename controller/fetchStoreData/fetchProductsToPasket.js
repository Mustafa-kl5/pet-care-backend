const User = require("../../models/user.js");
const mongoose = require("mongoose");
const Product = require("../../models/Products.js");
const ProductModel = mongoose.model("Product", Product);
const fetchProdcutsToPasket = async (req, res) => {
  try {
    let userId = req.user.userId;
    const user = await User.findById(userId);
    const userOrder = user.userOrder;
    res.json({ Order: userOrder, userID: userId });
  } catch (error) {
    res.json({ message: error.message });
  }
};
module.exports = fetchProdcutsToPasket;
