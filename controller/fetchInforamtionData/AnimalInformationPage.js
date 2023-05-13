const InformationAndTreatmentModel = require("../../models/InformationAndTreatment");
const AnimalInformationPage = async (req, res) => {
  try {
    const { type, breed } = req.body;
    const animal = await InformationAndTreatmentModel.find({
      animalType: type,
      animalBreed: breed,
    });
    res.json(animal);
  } catch (error) {
    res.json(error);
  }
};
module.exports = AnimalInformationPage;
