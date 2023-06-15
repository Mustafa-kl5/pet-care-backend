const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const admin = mongoose.model("admin", AdminSchema);

module.exports = admin;
