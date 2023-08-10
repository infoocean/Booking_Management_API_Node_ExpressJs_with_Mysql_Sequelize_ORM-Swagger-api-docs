const { loginuserSchemaValidation } = require("../../common/schema_validation");
const db = require("../../models/index.model");
const {
  verifyPassword,
  generateToken,
  decodeToken,
  hashPassword,
} = require("../../helper/helperfn");
const { emailValidation } = require("../../common/email_validation");
const User = db.User;

//user login controller
const userLoginController = async (req, res) => {
  const { email, password } = req.body;
  const { error, value } = loginuserSchemaValidation.validate(
    { email, password },
    {
      abortEarly: false,
    }
  );
  if (error) {
    return res.status(400).send({ error: "Invalid Request: " + error });
  } else {
    try {
      const findUser = await User.findOne({
        where: { email: email },
      });
      if (!findUser) {
        return res.status(400).json({ error: "Invalid Credentials!" });
      } else {
        const verify_password = await verifyPassword(
          password,
          findUser?.password
        );
        if (!verify_password) {
          return res.status(400).json({ error: "Invalid Credentials!" });
        } else {
          const logintoken = await generateToken({
            id: findUser?.id,
            name: findUser?.first_name,
            email: findUser?.email,
            role: findUser?.role_id,
          });
          res
            .status(200)
            .json({ succes: "login successfully", token: logintoken });
        }
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

//forgot password controller
const forgotPasswordController = async (req, res) => {
  const { email } = req.body;
  const { error, value } = emailValidation.validate(
    { email },
    {
      abortEarly: false,
    }
  );
  if (error) {
    return res.status(400).send({ error: "Invalid Request: " + error });
  } else {
    try {
      const findUser = await User.findOne({
        where: { email: email },
      });
      if (!findUser) {
        return res
          .status(404)
          .json({ succes: false, error: "email not regidtred!" });
      } else {
        const resetpasswordtoken = await generateToken({
          email: findUser?.email,
        });
        res.status(200).json({
          succes: true,
          message: "token expire in 8 hours",
          token: resetpasswordtoken,
        });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

//reset password token
const resetPasswordController = async (req, res) => {
  const { token, password } = req.body;
  try {
    const decode = await decodeToken(token);
    const findUser = await User.findOne({
      where: { email: decode?.email },
    });
    if (!findUser) {
      return res.status(400).json("user not Found!");
    } else {
      findUser.password = await hashPassword(password);
      findUser.save();
      res
        .status(202)
        .json({ success: true, message: "password updated succesfully!" });
    }
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports = {
  userLoginController,
  forgotPasswordController,
  resetPasswordController,
};
