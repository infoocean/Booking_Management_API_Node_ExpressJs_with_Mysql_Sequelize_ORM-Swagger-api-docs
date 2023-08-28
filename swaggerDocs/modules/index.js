const authorization = require("./authorization");
const authenticate = require("./authenticate");
const passwordauth = require("./password_auth");
const role = require("./role");
const user = require("./user");
const hotel = require("./hotel");
const room = require("./room");
const spaces = require("./spaces");
const automobile = require("./automobiles");
const typeidentifier = require("./typeidentifier");
const categoriesamenities = require("./categoriesamenities");
const orders = require("./orders");
const transaction = require("./transaction");
const payment = require("./payment");
const siteoption = require("./siteoptions");
const checkserver = require("./check_server");
module.exports = {
  paths: {
    ...checkserver,
    ...authorization,
    ...authenticate,
    ...passwordauth,
    ...role,
    ...user,
    ...hotel,
    ...room,
    ...spaces,
    ...automobile,
    ...typeidentifier,
    ...categoriesamenities,
    ...orders,
    ...transaction,
    ...payment,
    ...siteoption,
  },
};
