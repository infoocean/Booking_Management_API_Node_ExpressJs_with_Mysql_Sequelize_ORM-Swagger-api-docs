const express = require("express");
const router = express.Router();
const {
  verifyAuthToken,
  verifyLoginToken,
} = require("../middleware/aunthoticate");
const {
  addTransactionController,
  getTransactionsController,
  getTransactionsByIdController,
} = require("../controllers/transaction_controller/transaction_controller");

router.post(
  "/addtransaction",
  verifyAuthToken,
  verifyLoginToken,
  addTransactionController
);
router.get("/gettransactions", verifyAuthToken, getTransactionsController);
router.get(
  "/gettransaction/:id",
  verifyAuthToken,
  getTransactionsByIdController
);
module.exports = router;
