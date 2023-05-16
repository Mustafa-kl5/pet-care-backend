const InformationAndTreatment = require("../../models/InformationAndTreatment");
const GetBlogData = async (req, res) => {
  try {
    console.log("hello");
    const blogs = await InformationAndTreatment.find();
    res.json(blogs);
    console.log(blogs);
  } catch (error) {
    res.json(error);
  }
};
module.exports = GetBlogData;
