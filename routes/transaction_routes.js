const express = require("express");
const router = express.Router();
const {
  verifyAuthToken,
  verifyLoginToken,
} = require("../middleware/aunthoticate");
const {
  addTransactionController,
} = require("../controllers/transaction_controller/transaction_controller");

router.post(
  "/addtransaction",
  verifyAuthToken,
  verifyLoginToken,
  addTransactionController
);
module.exports = router;
