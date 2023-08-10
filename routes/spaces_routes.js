const express = require("express");
const router = express.Router();
const {
  verifyAuthToken,
  verifyLoginToken,
} = require("../middleware/aunthoticate");
const {
  addSpaceController,
  getSpacesController,
  getSpaceByIdController,
  editSpaceController,
  deleteSpacesController,
  getSpacesCategoriesController,
  getSpacesAmenitiesController,
} = require("../controllers/space_controller/space_controller");
const { spaceupload } = require("../middleware/uploader");
router.post(
  "/addspace",
  verifyAuthToken,
  verifyLoginToken,
  spaceupload.fields([
    { name: "image", maxCount: 1 },
    { name: "gallary_image", maxCount: 50 },
  ]),
  addSpaceController
);
router.get("/getspaces", verifyAuthToken, getSpacesController);
router.get("/getspace/:id", verifyAuthToken, getSpaceByIdController);
router.put(
  "/editspace/:id",
  verifyAuthToken,
  verifyLoginToken,
  spaceupload.fields([
    { name: "image", maxCount: 1 },
    { name: "gallary_image", maxCount: 50 },
  ]),
  editSpaceController
);
router.delete(
  "/deletespace/:id",
  verifyAuthToken,
  verifyLoginToken,
  deleteSpacesController
);

router.get(
  "/getspacescategories",
  verifyAuthToken,
  getSpacesCategoriesController
);
router.get(
  "/getspacesamenities",
  verifyAuthToken,
  getSpacesAmenitiesController
);

module.exports = router;
