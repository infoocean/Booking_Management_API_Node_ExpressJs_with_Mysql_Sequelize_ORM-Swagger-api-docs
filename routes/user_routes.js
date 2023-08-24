const express = require("express");
const router = express.Router();
const { userupload } = require("../middleware/uploader");
const {
  verifyAuthToken,
  verifyLoginToken,
} = require("../middleware/aunthoticate");
const {
  addUserController,
  getUsersController,
  getUserController,
  deleteuserUserController,
  editUserController,
  uploadProfilePictureController,
} = require("../controllers/usercontroller/usercontroller");
router.post("/adduser", verifyAuthToken, verifyLoginToken, addUserController);
router.get("/getusers", verifyAuthToken, getUsersController);
router.get("/getuser/:id", verifyAuthToken, getUserController);
router.delete("/deleteuser/:id", verifyAuthToken, deleteuserUserController);
router.put("/edituser/:id", verifyAuthToken, editUserController);
router.put(
  "/edituserprofilepicture/:id",
  verifyAuthToken,
  userupload.single("image"),
  uploadProfilePictureController
);

module.exports = router;
