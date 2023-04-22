const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  url: { type: String, required: true },
});
const image = mongoose.model("image", imageSchema);

module.exports = image;
