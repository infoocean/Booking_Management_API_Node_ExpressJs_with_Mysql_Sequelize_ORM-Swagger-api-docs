const express = require("express");
const router = express.Router();
const {
  verifyAuthToken,
  verifyLoginToken,
} = require("../middleware/aunthoticate");
const {
  addSiteOptionMetaController,
  ediSiteOptionMetaController,
  getSiteOptionMetaController,
} = require("../controllers/site_options_controller/site_options_controller");
const { siteupload } = require("../middleware/uploader");
router.post(
  "/addsiteoptionmeta",
  verifyAuthToken,
  verifyLoginToken,
  siteupload.fields([
    { name: "fav_icon", maxCount: 1 },
    { name: "company_logo", maxCount: 1 },
  ]),
  addSiteOptionMetaController
);
router.put(
  "/editsiteoptionmeta",
  verifyAuthToken,
  verifyLoginToken,
  siteupload.fields([
    { name: "fav_icon", maxCount: 1 },
    { name: "company_logo", maxCount: 1 },
  ]),
  ediSiteOptionMetaController
);
router.get("/getsiteoptionmeta", verifyAuthToken, getSiteOptionMetaController);

module.exports = router;
