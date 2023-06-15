const uploadImage = require("../../../imageServise/ImageUpload.js");
const mongoose = require("mongoose");
const Type = require("../../../models/AnimalType");
const TypeModel = mongoose.model("Type", Type);
const AddAnimalType = async (req, res) => {
  try {
    const { animalTypeInformaion } = req.body;
    const ConvertedImage = await uploadImage(
      animalTypeInformaion.Image,
      "BlogsImages"
    );
    const type = await new TypeModel({
      TypeName: animalTypeInformaion.animalType,
      TypeImage: ConvertedImage,
    });
    await type.save();
    res.json({ message: "Working Fine" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Somthing went wrong!" });
  }
};
module.exports = AddAnimalType;
