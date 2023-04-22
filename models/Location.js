const mongoose = require("mongoose");
const locationSchema = new mongoose.Schema({
  longitude: { type: String, required: true },
  latitude: { type: String, required: true },
});

module.exports = locationSchema;
