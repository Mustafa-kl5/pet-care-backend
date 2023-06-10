const InformationAndTreatment = require("../../../models/InformationAndTreatment");
const DeleteBlogRecord = async (req, res) => {
  try {
    const { BlogId } = req.body;
    await InformationAndTreatment.deleteOne({ _id: BlogId });
    res.json("Done!");
  } catch (error) {
    console.log(error.message);
    res.json(error.message);
  }
};
module.exports = DeleteBlogRecord;
