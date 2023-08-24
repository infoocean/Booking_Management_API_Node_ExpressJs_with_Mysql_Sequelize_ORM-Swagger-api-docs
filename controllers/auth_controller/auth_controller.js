const {
  loginuserSchemaValidation,
  userSignupValidation,
  resetSchemaValidation,
  changePasswordValidation,
} = require("../../common/schema_validation");
const db = require("../../models/index.model");
const {
  verifyPassword,
  generateToken,
  decodeToken,
  hashPassword,
} = require("../../helper/helperfn");
const { emailValidation } = require("../../common/email_validation");
const User = db.User;

//user Signup controller
const userSignupController = async (req, res) => {
  const { first_name, last_name, email, phone_number, password } = req.body;
  const { error, value } = userSignupValidation.validate(
    {
      first_name,
      last_name,
      email,
      phone_number,
      password,
    },
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
      if (findUser) {
        res.status(409).json({
          success: false,
          error: "Email already registered!",
        });
      } else {
        const user = await User.create({
          first_name: first_name,
          last_name: last_name,
          email: email,
          phone_number: phone_number,
          password: await hashPassword(password),
          role_id: 2,
        });
        res.status(201).json({
          success: true,
          message: "user signup successfylly!",
          user: user,
        });
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};

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
      res.status(500).send(error.message);
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
          .json({ succes: false, error: "email not registred!" });
      } else {
        const resetpasswordtoken = await generateToken({
          email: findUser?.email,
          id: findUser?.id,
        });
        res.status(200).json({
          succes: true,
          message:
            "forgot password success. use this token for reset password. token expire in 8 hours",
          token: resetpasswordtoken,
        });
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};

//reset password token
const resetPasswordController = async (req, res) => {
  const { token, password } = req.body;
  const { error, value } = resetSchemaValidation.validate(
    { token, password },
    {
      abortEarly: false,
    }
  );
  if (error) {
    return res.status(400).send({ error: "Invalid Request: " + error });
  } else {
    try {
      const decode = await decodeToken(token);
      if (decode && decode?.email && decode?.id) {
        const findUser = await User.findOne({
          where: { email: decode?.email, id: decode?.id },
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
      } else {
        return res.status(401).json({
          success: false,
          message: "Invalid token",
        });
      }
    } catch (e) {
      res.status(500).json(e);
    }
  }
};

//reset password token
const changePasswordController = async (req, res) => {
  const verify_token = await decodeToken(req.headers["x-access-token"]);
  const { current_password, new_password, confirm_password } = req.body;
  const { error, value } = changePasswordValidation.validate(
    { current_password, new_password, confirm_password },
    {
      abortEarly: false,
    }
  );
  if (error) {
    return res.status(400).send({ error: "Invalid Request: " + error });
  }
  if (new_password != confirm_password) {
    return res.status(400).json({
      succes: false,
      message: "new password and confirm pasword are not same",
    });
  }
  try {
    const findUser = await User.findOne({
      where: { email: verify_token?.email, id: verify_token?.id },
    });
    const verify_password = await verifyPassword(
      current_password,
      findUser?.password
    );
    if (verify_password) {
      findUser.password = await hashPassword(new_password);
      findUser.save();
      res
        .status(202)
        .json({ success: true, message: "password changed succesfully!" });
    } else {
      return res.status(400).json({
        succes: false,
        message: "invalid current_password",
      });
    }
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports = {
  userLoginController,
  forgotPasswordController,
  resetPasswordController,
  userSignupController,
  changePasswordController,
};
