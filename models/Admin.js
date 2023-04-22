const mongoose = require("mongoose");
const product = require("./Product");
const informationAndTreatment = require("./InformationAndTreatment");

const AdminSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  products: [product],
  informationAndTreatments: [informationAndTreatment],
});
const admin = mongoose.model("admin", AdminSchema);

module.exports = admin;
