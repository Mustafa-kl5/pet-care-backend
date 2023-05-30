const express = require("express");
const router = express.Router();
const AnimalInformationData = require("../controller/fetchInforamtionData/AnimalInformationPage.js");
const BreedHandler = require("../controller/fetchInforamtionData/BreedHandler");
const TypeHandler = require("../controller/fetchInforamtionData/TypeHandler.js");
router.get("/getType", TypeHandler);
router.post("/getBreed", BreedHandler);
router.post("/getAnimalInformation", AnimalInformationData);
module.exports = router;
