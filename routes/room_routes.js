const express = require("express");
const router = express.Router();
const {
  verifyAuthToken,
  verifyLoginToken,
} = require("../middleware/aunthoticate");
const {
  addRoomController,
  getRoomsController,
  getRoomsByHotelIdController,
  getRoomByIdController,
  editRoomByIdController,
} = require("../controllers/room_controller/room_controller");
const { roomupload } = require("../middleware/uploader");
router.post(
  "/addroom",
  verifyAuthToken,
  verifyLoginToken,
  roomupload.fields([
    { name: "image", maxCount: 1 },
    { name: "gallary_image", maxCount: 50 },
  ]),
  addRoomController
);
router.get("/getrooms", verifyAuthToken, getRoomsController);
router.get(
  "/getroomesbyhotelid/:id",
  verifyAuthToken,
  getRoomsByHotelIdController
);
router.get("/getroom/:id", verifyAuthToken, getRoomByIdController);
router.put(
  "/editroom/:id",
  verifyAuthToken,
  verifyLoginToken,
  roomupload.fields([
    { name: "image", maxCount: 1 },
    { name: "gallary_image", maxCount: 50 },
  ]),
  editRoomByIdController
);
module.exports = router;
