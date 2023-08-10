const express = require("express");
const router = express.Router();
const {
  verifyAuthToken,
  verifyLoginToken,
} = require("../middleware/aunthoticate");
const {
  addAutoMobileController,
  getAutoMobilesController,
  getAutoMobileByIdController,
  editAutoMobileController,
  deleteAutoMobileController,
  getAutoMobilesCategories,
} = require("../controllers/auto_mobile_controller/auto_mobile_controller");
const { automobileupload } = require("../middleware/uploader");
router.post(
  "/addautomobile",
  verifyAuthToken,
  verifyLoginToken,
  automobileupload.fields([
    { name: "image", maxCount: 1 },
    { name: "gallary_image", maxCount: 50 },
  ]),
  addAutoMobileController
);
router.get("/getautomobiles", verifyAuthToken, getAutoMobilesController);
router.get("/getautomobile/:id", verifyAuthToken, getAutoMobileByIdController);
router.put(
  "/editautomobile/:id",
  verifyAuthToken,
  verifyLoginToken,
  automobileupload.fields([
    { name: "image", maxCount: 1 },
    { name: "gallary_image", maxCount: 50 },
  ]),
  editAutoMobileController
);
router.delete(
  "/deleteautomobile/:id",
  verifyAuthToken,
  verifyLoginToken,
  deleteAutoMobileController
);

router.get(
  "/getautomobilecategories",
  verifyAuthToken,
  getAutoMobilesCategories
);

module.exports = router;
