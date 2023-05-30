const InformationAndTreatmentModel = require("../../models/InformationAndTreatment");
const mongoose = require("mongoose");
const Type = require("../../models/AnimalType");
const typeModel = mongoose.model("Type", Type);
const AnimalInformationPage = async (req, res) => {
  try {
    const { type, breed, typeID } = req.body;
    const animalType = await typeModel.findOne({ _id: typeID });
    const animalData = await InformationAndTreatmentModel.find({
      animalType: type,
      animalBreed: breed,
    });
    res.json({ animalData, animalType });
  } catch (error) {
    res.json(error);
  }
};
module.exports = AnimalInformationPage;
