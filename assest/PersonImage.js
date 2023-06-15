const imageToBase64 = () => {
  const reader = new FileReader();
  reader.onloadend = () => {
    console.log("RESULT", reader.result);
  };
  return reader.readAsDataURL("../assest/person.png");
};
module.exports = imageToBase64;
