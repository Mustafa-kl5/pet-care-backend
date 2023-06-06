const mongoose = require("mongoose");
const postModle = require("../../models/AdoptionPost");
const User = require("../../models/user");
const uploadImage = require("../../imageServise/ImageUpload");
const locationSchema = require("../../models/Location");
const socialMediaSchema = require("../../models/SocialMedia");
const locationModle = mongoose.model("location", locationSchema);
const socialMediaModle = mongoose.model("social media", socialMediaSchema);
const addAdoptionPost = async (req, res) => {
  const { userId } = req.user;
  const {
    animalName,
    animalType,
    animalBreed,
    WhatsappNumber,
    facebookLink,
    phoneNumber,
    description,
    images,
    location,
  } = req.body;

  try {
    const user = await User.findById(userId);
    const postLocation = new locationModle({
      latitude: location.lat,
      longitude: location.lng,
    });
    const postSocialMedia = new socialMediaModle({
      facebookLink: facebookLink,
      whatsappLink: WhatsappNumber,
      phoneNumber: phoneNumber,
    });
    const postImage = await uploadImage(images, "AdoptionPostImages");
    const post = new postModle({
      animalBreed: animalBreed,
      animalType: animalType,
      animalName: animalName,
      description: description,
      Images: postImage,
      ownerLocation: postLocation,
      ownerSocialMedia: postSocialMedia,
      postOwner: `${user.firstName} ${user.lastName}`,
      author: user._id,
      City: user.City,
    });
    await post.save();
    res.status(201).send("adoption post add");
  } catch (error) {
    res.status(401).send("Error to add post");
  }
};
module.exports = addAdoptionPost;
