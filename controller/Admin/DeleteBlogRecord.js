const InformationAndTreatment = require("../../models/InformationAndTreatment");
const DeleteBlogRecord = async (req, res) => {
  try {
    const { id } = req.body;
    await InformationAndTreatment.deleteOne({ _id: id });
    res.json("Done!");
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
module.exports = DeleteBlogRecord;
