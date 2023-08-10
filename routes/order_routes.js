const express = require("express");
const router = express.Router();
const {
  verifyAuthToken,
  verifyLoginToken,
} = require("../middleware/aunthoticate");
const {
  addOrderController,
  getOrdersController,
  getOrderByIdController,
} = require("../controllers/orders_controller/orders_controllers");

router.post("/addorder", verifyAuthToken, verifyLoginToken, addOrderController);
router.get("/getorders", verifyAuthToken, getOrdersController);
router.get("/getorder/:id", verifyAuthToken, getOrderByIdController);

module.exports = router;
