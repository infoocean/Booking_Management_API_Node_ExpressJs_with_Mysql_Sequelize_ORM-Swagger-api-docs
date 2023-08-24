const express = require("express");
const router = express.Router();
const {
  getauthorizationtoken,
} = require("../controllers/authorization_controller/get_authorization_token");
const {
  userLoginController,
  forgotPasswordController,
  resetPasswordController,
  userSignupController,
  changePasswordController,
} = require("../controllers/auth_controller/auth_controller");
const {
  verifyAuthToken,
  verifyLoginToken,
} = require("../middleware/aunthoticate");
router.get("/getauthorizationtoken", getauthorizationtoken);
router.post("/usersignup", verifyAuthToken, userSignupController);
router.post("/userlogin", verifyAuthToken, userLoginController);
router.post("/forgotpassword", verifyAuthToken, forgotPasswordController);
router.post("/resetpassword", verifyAuthToken, resetPasswordController);
router.post(
  "/changepassword",
  verifyAuthToken,
  verifyLoginToken,
  changePasswordController
);
module.exports = router;
