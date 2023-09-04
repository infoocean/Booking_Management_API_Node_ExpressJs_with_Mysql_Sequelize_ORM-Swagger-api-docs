const { userSchemaValidation } = require("../../common/schema_validation");
const db = require("../../models/index.model");
const Op = db.Sequelize.Op;
const { decodeToken } = require("../../helper/helperfn");
const {
  ValidateImageExtension,
  deleteSinglefile,
  getPagination,
  getPagingData,
} = require("../../common/commonfn");
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
  //by default getting users
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

  // //dynamic searching and filter and pagination
  // const { page, size, search_query } = req.query;
  // if (page <= 0 || size <= 0) {
  //   return res.status(400).json({
  //     success: false,
  //     message: "please enter valid page number and page size",
  //   });
  // }
  // var condition = search_query
  //   ? { first_name: { [Op.like]: `%${search_query}%` } }
  //   : null;
  // const { limit, offset } = getPagination(page, size);
  // const findUser = await User.findAndCountAll({
  //   where: condition,
  //   limit,
  //   offset,
  // });
  // const formaat_data = getPagingData(findUser, page, limit);
  // res.status(200).json({
  //   success: "true",
  //   responce: formaat_data,
  // });
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
  //check file is required
  if (!req.file) {
    return res.status(400).json({
      succes: false,
      message: "image is required",
    });
  }
  //check image extention validation
  if (ValidateImageExtension(req.file)) {
    deleteSinglefile(req.file?.path);
    return res.status(400).send({
      error:
        "Please upload file having extensions .jpeg/.jpg/.png/.gif/.svg only.",
    });
  }
  try {
    const finduser = await User.findByPk(req.params.id, {
      attributes: ["profile_picture"],
    });
    if (finduser) {
      deleteSinglefile(finduser?.profile_picture);
    }
    const updateUser = await User.update(
      {
        profile_picture: req.file ? req.file.path : "",
      },
      { where: { id: req.params.id } }
    );
    if (updateUser[0] == 1) {
      res.status(202).json({
        succes: true,
        message: "user profile picture updated successfully",
      });
    } else {
      deleteSinglefile(req.file?.path);
      res.status(404).json({
        success: false,
        message: "user not found!",
      });
    }
  } catch (error) {
    deleteSinglefile(req.file?.path);
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
