const moongose = require("mongoose");
const image = require("../models/image");
const AnimalTypeSchema = new moongose.Schema({
  TypeName: { type: String, required: true },
  TypeImage: [image],
});
module.exports = AnimalTypeSchema;
