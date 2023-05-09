const fs = require("fs");
const mongoose = require("mongoose");
const imageSchema = require("../models/image");
const imageModel = mongoose.model("images", imageSchema);

const uploadImage = async (images) => {
  const Images = [];

  for (const image of images) {
    const match = /^data:image\/(\w+);/.exec(image);
    const imageType = match ? match[1] : null;
    const filename = `image${
      Math.floor(Math.random() * 900000) + 100000
    }.${imageType}`;
    const filepath = `Images/${filename}`;
    const base64Data = image.replace(/^data:image\/\w+;base64,/, "");

    try {
      await fs.promises.writeFile(filepath, base64Data, "base64");
      const imageURL = `http://localhost:4111/${filepath}`; // modify the domain name as per your requirements
      const imagePost = new imageModel({
        fileName: imageURL,
      });
      await imagePost.save();
      Images.push(imagePost);
    } catch (error) {
      console.error(error);
    }
  }

  return Images;
};

module.exports = uploadImage;
