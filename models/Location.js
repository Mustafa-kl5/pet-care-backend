const mongoose = require("mongoose");
const locationSchema = new mongoose.Schema({
  longitude: { type: String, required: true },
  latitude: { type: String, required: true },
});

const location = mongoose.model("location", locationSchema);

module.exports = location;
