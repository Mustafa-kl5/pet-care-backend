const postModel = require("../../models/AdoptionPost");

const getAdoptionPost = async (req, res) => {
  const idFromUrl = req.params.id;
  const userId = idFromUrl.replace(/:/g, "");
  try {
    const posts = await postModel.find(
      { author: userId },
      "Images description status animalType animalBreed animalName"
    );

    res.send(posts);
  } catch (error) {
    res.json({ errorMassage: "cant get adoption post" });
  }
};
module.exports = getAdoptionPost;
