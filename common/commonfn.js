const uniqid = require("uniqid");

//generate uniquie order id
exports.generateOrderId = async () => {
  return await uniqid(`#${Date.now()}`);
};
