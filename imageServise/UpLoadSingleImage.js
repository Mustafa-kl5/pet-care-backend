const fs = require("fs");

const upLoadSingleImage = async (image, userName) => {
  const match = /^data:image\/(\w+);/.exec(image);
  const imageType = match ? match[1] : null;
  const filename = `image${
    Math.floor(Math.random() * 900000) + 100000 + userName
  }.${imageType}`;
  const filepath = `Images/userImage/${filename}`;
  const base64Data = image.replace(/^data:image\/\w+;base64,/, "");

  try {
    await fs.promises.writeFile(filepath, base64Data, "base64");
    const imageURL = `http://localhost:4111/${filepath}`; // modify the domain name as per your requirements

    return imageURL;
  } catch (error) {
    throw error;
  }
};

module.exports = upLoadSingleImage;
