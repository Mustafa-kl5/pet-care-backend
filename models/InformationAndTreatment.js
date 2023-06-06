const mongoose = require("mongoose");
const location = require("./Location");
const image = require("./image");
const informationAndTreatmentSchema = new mongoose.Schema({
  animalType: { type: String },
  animalBreed: { type: String },
  information: { type: String },
  clinicLocation: { type: location },
  images: [image],
});
const informationAndTreatment = mongoose.model(
  "informationAndTreatment",
  informationAndTreatmentSchema
);

module.exports = informationAndTreatment;
