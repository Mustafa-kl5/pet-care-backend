const Type = require("../../models/AnimalType");
const mongoose = require("mongoose");
const TypeHandler = async (req, res) => {
  const modelNames = mongoose.modelNames();
  const typeModels = modelNames
    .filter((modelName) => modelName.includes("Type"))
    .map((modelName) => mongoose.model(modelName));

  const allModelsData = [];

  for (const model of typeModels) {
    const documents = await model.find();
    allModelsData.push(documents);
  }
  res.json({ allModelsData });
};
module.exports = TypeHandler;
