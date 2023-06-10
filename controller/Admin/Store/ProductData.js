const Products = require("../../../models/Products");
const mongoose = require("mongoose");
const uploadImage = require("../../../imageServise/ImageUpload.js");
const ProductModel = mongoose.model("Product", Products);
const ProductData = async (req, res) => {
  try {
    const { ProductData } = req.body;
    const Images = await uploadImage(ProductData.Images, "ProductImages");
    console.log(ProductData);
    const product = new ProductModel({
      animalType: ProductData.AnimalType,
      productName: ProductData.ProductName,
      productType: ProductData.ProductType,
      productPrice: ProductData.ProductPrice,
      productImages: Images,
    });
    await product.save();

    res.json({ message: "Done!" });
  } catch (error) {
    console.error("Error while saving the product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = ProductData;
