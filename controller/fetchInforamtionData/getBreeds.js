const InformationandTreatmentSchema = require("../../models/InformationAndTreatment");
const mongoose = require("mongoose");
const Type = require("../../models/AnimalType");
const typeModel = mongoose.model("Type", Type);
const getBreeds = async (req, res) => {
  try {
    const { type, typeID } = req.body;
    const animalType = await typeModel.findOne({ _id: typeID });
    const informationBlog = await InformationandTreatmentSchema.find({
      animalType: type,
    });

    res.json({ animalType, informationBlog });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
module.exports = getBreeds;
