const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  fileName: { type: String },
});
module.exports = imageSchema;
