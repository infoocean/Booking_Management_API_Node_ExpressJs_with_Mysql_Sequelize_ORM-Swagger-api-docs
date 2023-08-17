const { space_defaine_arr } = require("../../common/default_array");
const { decodeToken } = require("../../helper/helperfn");
const db = require("../../models/index.model");
const Space = db.Space;
const SpaceMeta = db.SpaceMeta;
const CategoriesAmenities = db.CategoriesAmenities;
//add space controller
const addSpaceController = async (req, res) => {
  const verify_token = await decodeToken(req.headers["x-access-token"]);
  const {
    title,
    slug,
    status,
    space_size,
    guest_capacity,
    cost_per_hour,
    cost_per_day,
    user_id,
  } = req.body;
  let image = "",
    gallary_image = [];
  if (req.files.image) {
    image = req.files.image[0]?.path;
  }
  if (req.files.gallary_image) {
    req.files.gallary_image.forEach((element) => {
      gallary_image.push(element?.path);
    });
  }
  try {
    const findspace = await Space.findOne({
      where: { title: title },
    });
    if (findspace) {
      res.status(409).json({
        success: false,
        error: "title already registered!",
      });
    } else {
      const space = await Space.create({
        title: title,
        slug: slug,
        status: status,
        space_size: space_size,
        guest_capacity: guest_capacity,
        user_id: user_id,
        cost_per_hour: cost_per_hour,
        cost_per_day: cost_per_day,
        created_by: verify_token?.id,
      });
      if (space) {
        let space_meta_keys = ["image", "gallary_image"];
        Object.keys(req.body).filter((key) => {
          if (!space_defaine_arr.includes(key)) {
            space_meta_keys.push(key);
          }
        });
        const space_meta_keys_lgh = space_meta_keys.length;
        for (let index = 0; index < space_meta_keys_lgh; index++) {
          if (
            space_meta_keys[index] === "image" ||
            space_meta_keys[index] === "gallary_image"
          ) {
            await SpaceMeta.create({
              key: space_meta_keys[index],
              value:
                space_meta_keys[index] === "image"
                  ? image
                  : gallary_image.length > 0
                  ? JSON.stringify(gallary_image)
                  : "",
              space_id: space?.id,
            });
          } else {
            await SpaceMeta.create({
              key: space_meta_keys[index],
              value: req.body[space_meta_keys[index]]
                ? req.body[space_meta_keys[index]]
                : "",
              space_id: space?.id,
            });
          }
        }
      }
      res.status(201).json({
        success: true,
        message: "space created successfylly!",
        space: space,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//get spaces controller
const getSpacesController = async (req, res) => {
  try {
    const findspaces = await Space.findAll({
      include: [
        {
          model: SpaceMeta,
          attributes: ["space_id", "key", "value"],
        },
      ],
    });
    if (findspaces.length > 0) {
      res.status(200).json({
        success: true,
        spaces: findspaces,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "rooms not found",
        spaces: findspaces,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//get space by id controller
const getSpaceByIdController = async (req, res) => {
  try {
    const findspace = await Space.findByPk(req.params.id, {
      include: [
        {
          model: SpaceMeta,
          attributes: ["space_id", "key", "value"],
        },
      ],
    });
    if (findspace) {
      res.status(200).json({
        succes: true,
        space: findspace,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "space not found!",
        space: findspace,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//edit space by id controller
const editSpaceController = async (req, res) => {
  const verify_token = await decodeToken(req.headers["x-access-token"]);

  const getspace = await Space.findByPk(req.params.id);
  if (!getspace) {
    return res.status(404).json({
      success: false,
      message: "space not found",
    });
  }
  const {
    title,
    slug,
    status,
    space_size,
    guest_capacity,
    cost_per_hour,
    cost_per_day,
    user_id,
  } = req.body;
  let image = "",
    gallary_image = [];
  if (req.files.image) {
    image = req.files.image[0]?.path;
  }
  if (req.files.gallary_image) {
    req.files.gallary_image.forEach((element) => {
      gallary_image.push(element?.path);
    });
  }
  try {
    const checkspace_title = await Space.findAll({
      where: { id: req.params.id },
    });
    if (checkspace_title) {
      const updatespace = await Space.update(
        {
          title: title,
          slug: slug,
          status: status,
          space_size: space_size,
          guest_capacity: guest_capacity,
          cost_per_hour: cost_per_hour,
          cost_per_day: cost_per_day,
          user_id: user_id,
          updated_by: verify_token?.id,
        },
        { where: { id: req.params.id } }
      );
      if (updatespace[0] == 1) {
        let space_meta_keys = ["image", "gallary_image"];
        Object.keys(req.body).filter((key) => {
          if (!space_defaine_arr.includes(key)) {
            space_meta_keys.push(key);
          }
        });
        const space_meta_keys_lgh = space_meta_keys.length;
        //get allready register keys and value
        const find_already_register_keys = await SpaceMeta.findAll({
          where: {
            space_id: req.params.id,
          },
          attributes: ["key"],
        });
        const mynewdt = find_already_register_keys.filter((e) => {
          return e?.key !== "image" && e.key !== "gallary_image";
        });
        const dt = [];
        mynewdt.map((data) => {
          dt.push(data?.key);
        });
        for (let index = 0; index < space_meta_keys_lgh; index++) {
          if (
            space_meta_keys[index] == "image" ||
            space_meta_keys[index] == "gallary_image"
          ) {
            await SpaceMeta.update(
              {
                value:
                  space_meta_keys[index] === "image"
                    ? image
                    : gallary_image.length > 0
                    ? JSON.stringify(gallary_image)
                    : "",
              },
              {
                where: { space_id: req.params.id, key: space_meta_keys[index] },
              }
            );
          } else {
            if (dt.includes(space_meta_keys[index])) {
              await SpaceMeta.update(
                {
                  value: req.body[space_meta_keys[index]],
                },
                {
                  where: {
                    space_id: req.params.id,
                    key: [space_meta_keys[index]],
                  },
                }
              );
            } else {
              await SpaceMeta.create({
                key: space_meta_keys[index],
                value: req.body[space_meta_keys[index]]
                  ? req.body[space_meta_keys[index]]
                  : "",
                space_id: req.params.id,
              });
            }
          }
        }
        res.status(202).json({
          succes: true,
          message: "space updated successfully",
        });
      }
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//delete space by id controller soft deleted
const deleteSpacesController = async (req, res) => {
  const verify_token = await decodeToken(req.headers["x-access-token"]);
  try {
    const deletespace = await Space.update(
      {
        is_deleted: 1,
        deleted_by: verify_token?.id,
      },
      { where: { id: req.params.id } }
    );
    if (deletespace[0] == 1) {
      res.status(202).json({
        succes: true,
        message: "space deleted successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "space not found!",
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//get spaces categories controller
const getSpacesCategoriesController = async (req, res) => {
  try {
    const findSpaceCategories = await CategoriesAmenities.findAll({
      where: {
        type_identifier_id: req.query.type_identifier_id
          ? req.query.type_identifier_id
          : 3,
      },
    });
    if (findSpaceCategories.length > 0) {
      res.status(200).json({
        success: true,
        SpaceCategories: findSpaceCategories,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "space categories not found",
        SpaceCategories: findSpaceCategories,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//get spaces amenities controller
const getSpacesAmenitiesController = async (req, res) => {
  try {
    const findspaceAmenities = await CategoriesAmenities.findAll({
      where: {
        type_identifier_id: req.query.type_identifier_id
          ? req.query.type_identifier_id
          : 4,
      },
    });
    if (findspaceAmenities.length > 0) {
      res.status(200).json({
        success: true,
        spaceAmenities: findspaceAmenities,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Space Amenities not found",
        spaceAmenities: findspaceAmenities,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  addSpaceController,
  getSpacesController,
  getSpaceByIdController,
  editSpaceController,
  deleteSpacesController,
  getSpacesCategoriesController,
  getSpacesAmenitiesController,
};
