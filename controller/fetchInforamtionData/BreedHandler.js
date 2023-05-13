const InformationandTreatmentSchema = require("../../models/InformationAndTreatment");
const BreedHandler = async (req, res) => {
  try {
    const { type } = req.body;
    const InformationData = await InformationandTreatmentSchema.find({
      animalType: type,
    });
    res.json(InformationData);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
module.exports = BreedHandler;
