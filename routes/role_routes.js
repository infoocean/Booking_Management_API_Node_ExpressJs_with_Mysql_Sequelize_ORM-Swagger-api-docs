const express = require("express");
const router = express.Router();
const { verifyAuthToken } = require("../middleware/aunthoticate");
const {
  addRoleController,
  getRoleController,
  editRoleController,
} = require("../controllers/role_controller/role_controller");
router.post("/addrole", verifyAuthToken, addRoleController);
router.get("/getroles", verifyAuthToken, getRoleController);
router.put("/editrole/:id", verifyAuthToken, editRoleController);
module.exports = router;
