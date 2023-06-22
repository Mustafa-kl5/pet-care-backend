const InformationAndTreatmentModel = require("../../models/InformationAndTreatment");
const mongoose = require("mongoose");
const Type = require("../../models/AnimalType");
const typeModel = mongoose.model("Type", Type);
const getAnimalInformationData = async (req, res) => {
  try {
    const { type, breed, typeID } = req.body;
    const animalType = await typeModel.findOne({ _id: typeID });
    const animalData = await InformationAndTreatmentModel.findOne({
      animalType: type,
      animalBreed: breed,
    });
    res.json({ animalData, animalType });
  } catch (error) {
    res.json(error);
  }
};
module.exports = getAnimalInformationData;
