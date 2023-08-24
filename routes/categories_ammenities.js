const express = require("express");
const router = express.Router();
const {
  verifyAuthToken,
  verifyLoginToken,
} = require("../middleware/aunthoticate");
const {
  AddCategoriesAmenitiesController,
  getCategoriesAmenitiesbyidController,
  editCategoriesAmenitiesbyidController,
  getCategoriesAmenitiesController,
} = require("../controllers/categories_amenities_controller/categories_amentities_controller");

router.post(
  "/addcategoriesoramenities",
  verifyAuthToken,
  verifyLoginToken,
  AddCategoriesAmenitiesController
);
router.get(
  "/getcategoriesamenities/:id",
  verifyAuthToken,
  getCategoriesAmenitiesbyidController
);

router.put(
  "/editcategoriesamenities/:id",
  verifyAuthToken,
  verifyLoginToken,
  editCategoriesAmenitiesbyidController
);

router.get(
  "/getcategoriesamenitiesbytypeidentifierid",
  verifyAuthToken,
  getCategoriesAmenitiesController
);

module.exports = router;
