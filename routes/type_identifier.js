const express = require("express");
const router = express.Router();
const {
  verifyAuthToken,
  verifyLoginToken,
} = require("../middleware/aunthoticate");
const {
  getTypeIdentifierController,
  addTypeIdentifierController,
} = require("../controllers/typeidentifier_controller/typeidentifier_controller");
router.post(
  "/addtypeidentifier",
  verifyAuthToken,
  verifyLoginToken,
  addTypeIdentifierController
);
router.get("/gettypeidentifiers", verifyAuthToken, getTypeIdentifierController);

module.exports = router;
