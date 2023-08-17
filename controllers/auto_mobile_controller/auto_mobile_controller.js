const { automobile_defaine_arr } = require("../../common/default_array");
const { decodeToken } = require("../../helper/helperfn");
const db = require("../../models/index.model");
const AutoMobile = db.Automobile;
const AutoMobileMeta = db.AutoMobileMeta;
const CategoriesAmenities = db.CategoriesAmenities;

//add automobile controller
const addAutoMobileController = async (req, res) => {
  const verify_token = await decodeToken(req.headers["x-access-token"]);
  const {
    auto_mobile_categories,
    auto_mobile_name,
    auto_mobile_number,
    auto_mobile_brand,
    auto_mobile_type,
    user_id,
    rc_number,
    seater,
    cost_per_km,
    status,
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
    const findautomobile = await AutoMobile.findOne({
      where: { auto_mobile_number: auto_mobile_number },
    });
    if (findautomobile) {
      res.status(409).json({
        success: false,
        error: "auto mobile already registered!",
      });
    } else {
      const createautomobile = await AutoMobile.create({
        auto_mobile_categories: auto_mobile_categories,
        auto_mobile_name: auto_mobile_name,
        auto_mobile_number: auto_mobile_number,
        auto_mobile_brand: auto_mobile_brand,
        auto_mobile_type: auto_mobile_type,
        user_id: user_id,
        rc_number: rc_number,
        seater: seater,
        cost_per_km: cost_per_km,
        status: status,
        created_by: verify_token?.id,
      });
      if (createautomobile) {
        let automobile_meta_keys = ["image", "gallary_image"];
        Object.keys(req.body).filter((key) => {
          if (!automobile_defaine_arr.includes(key)) {
            automobile_meta_keys.push(key);
          }
        });
        const automobile_meta_keys_lgh = automobile_meta_keys.length;
        for (let index = 0; index < automobile_meta_keys_lgh; index++) {
          if (
            automobile_meta_keys[index] === "image" ||
            automobile_meta_keys[index] === "gallary_image"
          ) {
            await AutoMobileMeta.create({
              key: automobile_meta_keys[index],
              value:
                automobile_meta_keys[index] === "image"
                  ? image
                  : gallary_image.length > 0
                  ? JSON.stringify(gallary_image)
                  : "",
              auto_mobile_id: createautomobile?.id,
            });
          } else {
            await AutoMobileMeta.create({
              key: automobile_meta_keys[index],
              value: req.body[automobile_meta_keys[index]]
                ? req.body[automobile_meta_keys[index]]
                : "",
              auto_mobile_id: createautomobile?.id,
            });
          }
        }
      }
      res.status(201).json({
        success: true,
        message: "auto mobile  created successfylly!",
        automobile: createautomobile,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//get automobiles controller
const getAutoMobilesController = async (req, res) => {
  try {
    const findAutoMobile = await AutoMobile.findAll({
      include: [
        {
          model: AutoMobileMeta,
          attributes: ["auto_mobile_id", "key", "value"],
        },
      ],
    });
    if (findAutoMobile.length > 0) {
      res.status(200).json({
        success: true,
        automobile: findAutoMobile,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Auto Mobile not found",
        automobile: findAutoMobile,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//get automobile by id controller
const getAutoMobileByIdController = async (req, res) => {
  try {
    const findautomibiles = await AutoMobile.findByPk(req.params.id, {
      include: [
        {
          model: AutoMobileMeta,
          attributes: ["auto_mobile_id", "key", "value"],
        },
      ],
    });
    if (findautomibiles) {
      res.status(200).json({
        succes: true,
        automibiles: findautomibiles,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "automobiles not found!",
        automibiles: findautomibiles,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//edit automobile by id controller
const editAutoMobileController = async (req, res) => {
  const verify_token = await decodeToken(req.headers["x-access-token"]);
  const {
    auto_mobile_categories,
    auto_mobile_name,
    auto_mobile_number,
    auto_mobile_brand,
    auto_mobile_type,
    user_id,
    rc_number,
    seater,
    cost_per_km,
    status,
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
    const updateAutoMobile = await AutoMobile.update(
      {
        auto_mobile_categories: auto_mobile_categories,
        auto_mobile_name: auto_mobile_name,
        auto_mobile_number: auto_mobile_number,
        auto_mobile_brand: auto_mobile_brand,
        auto_mobile_type: auto_mobile_type,
        user_id: user_id,
        rc_number: rc_number,
        seater: seater,
        cost_per_km: cost_per_km,
        status: status,
        updated_by: verify_token?.id,
      },
      { where: { id: req.params.id } }
    );
    if (updateAutoMobile[0] == 1) {
      let automobile_meta_keys = ["image", "gallary_image"];
      Object.keys(req.body).filter((key) => {
        if (!automobile_defaine_arr.includes(key)) {
          automobile_meta_keys.push(key);
        }
      });
      const automobile_meta_keys_lgh = automobile_meta_keys.length;
      //get allready register keys and value
      const find_allready_register_keys = await AutoMobileMeta.findAll({
        where: {
          auto_mobile_id: req.params.id,
        },
        attributes: ["key"],
      });
      const mynewdt = find_allready_register_keys.filter((e) => {
        return e?.key !== "image" && e.key !== "gallary_image";
      });
      const dt = [];
      mynewdt.map((data) => {
        dt.push(data?.key);
      });
      for (let index = 0; index < automobile_meta_keys_lgh; index++) {
        if (
          automobile_meta_keys[index] == "image" ||
          automobile_meta_keys[index] == "gallary_image"
        ) {
          await AutoMobileMeta.update(
            {
              value:
                automobile_meta_keys[index] === "image"
                  ? image
                  : gallary_image.length > 0
                  ? JSON.stringify(gallary_image)
                  : "",
            },
            {
              where: {
                auto_mobile_id: req.params.id,
                key: automobile_meta_keys[index],
              },
            }
          );
        } else {
          if (dt.includes(automobile_meta_keys[index])) {
            await AutoMobileMeta.update(
              {
                value: req.body[automobile_meta_keys[index]],
              },
              {
                where: {
                  auto_mobile_id: req.params.id,
                  key: [automobile_meta_keys[index]],
                },
              }
            );
          } else {
            await AutoMobileMeta.create({
              key: automobile_meta_keys[index],
              value: req.body[automobile_meta_keys[index]]
                ? req.body[automobile_meta_keys[index]]
                : "",
              auto_mobile_id: req.params.id,
            });
          }
        }
      }
      res.status(202).json({
        succes: true,
        message: "Auto Mobile updated successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Auto Mobile not found!",
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//delete automobile by id controller soft deleted
const deleteAutoMobileController = async (req, res) => {
  const verify_token = await decodeToken(req.headers["x-access-token"]);
  try {
    const deletAutoMobile = await AutoMobile.update(
      {
        is_deleted: 1,
        deleted_by: verify_token?.id,
      },
      { where: { id: req.params.id } }
    );
    if (deletAutoMobile[0] == 1) {
      res.status(202).json({
        succes: true,
        message: "Auto Mobile deleted successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Auto Mobile not found!",
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//get automobiles categories controller
const getAutoMobilesCategories = async (req, res) => {
  try {
    const findAutoMobileCategories = await CategoriesAmenities.findAll({
      where: {
        type_identifier_id: req.query.type_identifier_id
          ? req.query.type_identifier_id
          : 5,
      },
    });
    if (findAutoMobileCategories.length > 0) {
      res.status(200).json({
        success: true,
        automobilecategories: findAutoMobileCategories,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Auto Mobile categories not found",
        automobilecategories: findAutoMobileCategories,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  addAutoMobileController,
  getAutoMobilesController,
  getAutoMobileByIdController,
  editAutoMobileController,
  deleteAutoMobileController,
  getAutoMobilesCategories,
};
