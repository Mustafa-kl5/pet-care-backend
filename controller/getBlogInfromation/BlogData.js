const InformationAndTreatment = require("../../models/InformationAndTreatment");
const GetBlogData = async (req, res) => {
  try {
    const blogInformation = req.body;
    console.log(blogInformation);
    const blog = await new InformationAndTreatment({
      animalType: blogInformation.AnimalType,
      animalBreed: blogInformation.AnimalBreed,
      information: blogInformation.Description,
      longitude: blogInformation.longitude,
      latitude: blogInformation.latitude,
      images: blogInformation.Images,
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
