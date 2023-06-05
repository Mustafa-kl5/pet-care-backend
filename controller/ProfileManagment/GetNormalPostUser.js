const postModel = require("../../models/NormalPost");

const getNormalPostUser = async (req, res) => {
  const idFromUrl = req.params.id;
  const userId = idFromUrl.replace(/:/g, "");
  try {
    const posts = await postModel.find(
      { author: userId },
      "postType Images description"
    );
    res.send(posts);
  } catch (error) {
    res.json({ errorMassage: "cant get post" });
  }
};
module.exports = getNormalPostUser;
