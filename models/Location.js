const mongoose = require("mongoose");
const locationSchema = new mongoose.Schema({
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
  _id: false,
});

module.exports = locationSchema;
