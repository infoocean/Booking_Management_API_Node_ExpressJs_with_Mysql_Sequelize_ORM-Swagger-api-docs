const { userSchemaValidation } = require("../../common/schema_validation");
const db = require("../../models/index.model");
const { decodeToken } = require("../../helper/helperfn");
const User = db.User;

//add user controller
const addUserController = async (req, res) => {
  const verify_token = await decodeToken(req.headers["x-access-token"]);
  const { first_name, last_name, email, phone_number, date_of_birth, role_id } =
    req.body;
  const { error, value } = userSchemaValidation.validate(
    {
      first_name,
      last_name,
      email,
      phone_number,
      date_of_birth,
      role_id,
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
          date_of_birth: date_of_birth,
          created_by: verify_token?.id,
          role_id: role_id,
        });
        res.status(201).json({
          success: true,
          message: "user created successfylly!",
          user: user,
        });
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};

//get users controller
const getUsersController = async (req, res) => {
  try {
    const findUser = await User.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });
    if (findUser.length > 0) {
      res.status(200).json({
        success: true,
        users: findUser,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "user not found",
        users: findUser,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//get user by id controller
const getUserController = async (req, res) => {
  try {
    const findUser = await User.findByPk(req.params.id, {
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });
    if (findUser) {
      res.status(200).json({
        succes: true,
        user: findUser,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "user not found!",
        user: findUser,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//delete user controller soft deleted
const deleteuserUserController = async (req, res) => {
  try {
    const findUser = await User.update(
      {
        is_deleted: 1,
      },
      { where: { id: req.params.id } }
    );
    if (findUser[0] == 1) {
      res.status(202).json({
        succes: true,
        message: "user deleted successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "user not found!",
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//edit user controller
const editUserController = async (req, res) => {
  const { first_name, last_name, email, phone_number, date_of_birth, role_id } =
    req.body;
  const { error, value } = userSchemaValidation.validate(
    {
      first_name,
      last_name,
      email,
      phone_number,
      date_of_birth,
      role_id,
    },
    {
      abortEarly: false,
    }
  );
  if (error) {
    return res.status(400).send({ error: "Invalid Request: " + error });
  }
  const user = await User.findByPk(req.params.id);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "user not found!",
    });
  }
  try {
    const findregisterUser = await User.findOne({
      where: { email: email },
      attributes: ["id", "email"],
    });
    if (findregisterUser && findregisterUser?.id == req.params.id) {
      const findUser = await User.update(
        {
          first_name: first_name,
          last_name: last_name,
          email: email,
          phone_number: phone_number,
          date_of_birth: date_of_birth,
        },
        { where: { id: req.params.id } }
      );
      if (findUser[0] == 1) {
        res.status(202).json({
          succes: true,
          message: "user updated successfully",
        });
      }
    } else {
      res.status(409).json({
        success: false,
        error: "Email already registered!",
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//edit user profile picture controller
const uploadProfilePictureController = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      succes: false,
      message: "image is required",
    });
  }
  try {
    const findUser = await User.update(
      {
        profile_picture: req.file ? req.file.path : "",
      },
      { where: { id: req.params.id } }
    );
    if (findUser[0] == 1) {
      res.status(202).json({
        succes: true,
        message: "user profile picture updated successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "user not found!",
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  addUserController,
  getUsersController,
  getUserController,
  deleteuserUserController,
  editUserController,
  uploadProfilePictureController,
};
