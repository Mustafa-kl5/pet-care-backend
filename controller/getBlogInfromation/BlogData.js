const uploadImage = require("../../imageServise/ImageUpload");
const InformationAndTreatment = require("../../models/InformationAndTreatment");
const location = require("../../models/Location");
const mongoose = require("mongoose");
const locationModel = mongoose.model("location", location);

const GetBlogData = async (req, res) => {
  try {
    const { blogInformation } = req.body;

    const image = await uploadImage(blogInformation.Images);

    console.log(blogInformation);
    const blog = await new InformationAndTreatment({
      animalType: blogInformation.AnimalType,
      animalBreed: blogInformation.AnimalBreed,
      information: blogInformation.Description,
      clinicLocation: new locationModel({
        longitude: blogInformation.Longitude,
        latitude: blogInformation.Latitude,
      }),

      images: image,
    });
    await blog.save();

    res.json({
      state: "ok",
    });
  } catch (error) {
    console.log(error);
    res.json({
      state: "not okay ,somthing went wrong",
    });
  }
};
module.exports = GetBlogData;
