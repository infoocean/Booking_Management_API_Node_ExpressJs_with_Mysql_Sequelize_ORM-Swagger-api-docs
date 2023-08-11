const express = require("express");
const router = express.Router();
const {
  verifyAuthToken,
  verifyLoginToken,
} = require("../middleware/aunthoticate");
const {
  addHotelController,
  getHotelController,
  getHotelByIdController,
  deleteHotelByIdController,
  editHotelByIdController,
  getHotelcategoriesController,
  getHotelAmenitiesController,
  getHotelDetailsByIdController,
} = require("../controllers/hotel_controller/hotel_controller");
const { upload } = require("../middleware/uploader");
router.post(
  "/addhotel",
  verifyAuthToken,
  verifyLoginToken,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "gallary_image", maxCount: 50 },
  ]),
  addHotelController
);
router.get("/gethotels", verifyAuthToken, getHotelController);
router.get("/gethotel/:id", verifyAuthToken, getHotelByIdController);
router.put(
  "/edithotel/:id",
  verifyAuthToken,
  verifyLoginToken,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "gallary_image", maxCount: 50 },
  ]),
  editHotelByIdController
);
router.delete(
  "/deletehotel/:id",
  verifyAuthToken,
  verifyLoginToken,
  deleteHotelByIdController
);
router.get(
  "/gethotelcategories",
  verifyAuthToken,
  getHotelcategoriesController
);
router.get("/gethotelamenities", verifyAuthToken, getHotelAmenitiesController);
router.get(
  "/gethoteldetails/:id",
  verifyAuthToken,
  getHotelDetailsByIdController
);

module.exports = router;
