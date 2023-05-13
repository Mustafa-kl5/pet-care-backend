const express = require("express");
const router = express.Router();
const AnimalInformationData = require("../controller/fetchInforamtionData/AnimalInformationPage.js");
const BreedHandler = require("../controller/fetchInforamtionData/BreedHandler");
router.post("/getBreed", BreedHandler);
router.post("/getAnimalInformation", AnimalInformationData);
module.exports = router;
