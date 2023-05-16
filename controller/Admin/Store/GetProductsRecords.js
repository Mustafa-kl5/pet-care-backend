const Product = require("../../../models/Products");
const GetProductRecords = async (req, res) => {
  try {
    const Products = await Product.find();
    res.json({ data: Products, message: "!Done" });
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
};
module.exports = GetProductRecords;
