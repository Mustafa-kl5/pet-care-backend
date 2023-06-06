const InformationAndTreatment = require("../../../models/InformationAndTreatment");
const GetBlogRecords = async (req, res) => {
  try {
    const blogs = await InformationAndTreatment.find();
    res.json(blogs);
  } catch (error) {
    res.json(error);
  }
};
module.exports = GetBlogRecords;
