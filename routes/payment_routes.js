const express = require("express");
const router = express.Router();
const {
  verifyAuthToken,
  verifyLoginToken,
} = require("../middleware/aunthoticate");
const {
  AcceptPaymentController,
  GetpaymentDetailsController,
} = require("../controllers/payment_controller/payment_controller");

router.post(
  "/acceptpayment",
  verifyAuthToken,
  verifyLoginToken,
  AcceptPaymentController
);
router.get(
  "/getpaymentdetails",
  verifyAuthToken,
  verifyLoginToken,
  GetpaymentDetailsController
);

module.exports = router;
