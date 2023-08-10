const express = require("express");
const router = express.Router();
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
} = require("../controllers/usercontroller/usercontroller");
router.post("/adduser", verifyAuthToken, addUserController);
router.get("/getusers", verifyAuthToken, getUsersController);
router.get("/getuser/:id", verifyAuthToken, getUserController);
router.delete("/deleteuser/:id", verifyAuthToken, deleteuserUserController);
router.put("/edituser/:id", verifyAuthToken, editUserController);

module.exports = router;
