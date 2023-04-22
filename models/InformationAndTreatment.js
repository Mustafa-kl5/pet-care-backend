const mongoose = require("mongoose");
const location = require("./Location");
const image = require("./image");

const informationAndTreatmentSchema = new mongoose.Schema({
  animalType: { type: String, required: true },
  animalBreed: { type: String, required: true },
  information: { type: String, required: true },
  clinicLocation: { type: location },
  images: [image],
});
const informationAndTreatment = mongoose.model(
  "informationAndTreatment",
  informationAndTreatmentSchema
);

module.exports = informationAndTreatment;
