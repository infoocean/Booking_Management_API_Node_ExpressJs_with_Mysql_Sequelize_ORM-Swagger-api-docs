const express = require("express");
const router = express.Router();
const {
  verifyAuthToken,
  verifyLoginToken,
} = require("../middleware/aunthoticate");
const {
  addRoleController,
  getRoleController,
  editRoleController,
} = require("../controllers/role_controller/role_controller");
router.post("/addrole", verifyAuthToken, verifyLoginToken, addRoleController);
router.get("/getroles", verifyAuthToken, getRoleController);
router.put(
  "/editrole/:id",
  verifyAuthToken,
  verifyLoginToken,
  editRoleController
);
module.exports = router;
