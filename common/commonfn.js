const uniqid = require("uniqid");

//generate uniquie order id
exports.generateOrderId = async () => {
  return await uniqid(`#${Date.now()}`);
};

exports.getExtension = (fileName) => {
  const dotIndex = fileName.lastIndexOf(".");
  if (dotIndex === -1) {
    return "";
  }
  return fileName.substring(dotIndex + 1);
};
