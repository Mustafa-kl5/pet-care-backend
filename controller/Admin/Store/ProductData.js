const Product = require("../../../models/Products");
const moongose = require("mongoose");
const uploadImage = require("../../../imageServise/ImageUpload.js");
// const productmodel = moongose.model("productmodel", Product);
const ProductData = async (req, res) => {
  try {
    const { ProductData } = req.body;
    const Images = await uploadImage(ProductData.Images, "ProductImages");
    console.log(ProductData);

    const product = await new Product({
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
