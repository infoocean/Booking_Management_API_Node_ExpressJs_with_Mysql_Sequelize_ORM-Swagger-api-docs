const {
  deleteSinglefile,
  ValidateImageExtension,
} = require("../../common/commonfn");
const { predefine_keys } = require("../../common/default_array");
const {
  siteOptionsMetaSchemaValidation,
} = require("../../common/schema_validation");
const { decodeToken } = require("../../helper/helperfn");
const db = require("../../models/index.model");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const SiteOptionMeta = db.SiteOptionMeta;

//add site options meta controller
const addSiteOptionMetaController = async (req, res) => {
  const verify_token = await decodeToken(req.headers["x-access-token"]);
  const { title } = req.body;
  let fav_icon = "",
    company_logo = "";
  if (req.files.fav_icon) {
    fav_icon = req.files.fav_icon[0]?.path;
  }
  if (req.files.company_logo) {
    company_logo = req.files.company_logo[0]?.path;
  }
  //check validation
  const { error, value } = siteOptionsMetaSchemaValidation.validate(
    {
      title,
      fav_icon,
      company_logo,
    },
    {
      abortEarly: false,
    }
  );
  if (error) {
    deleteSinglefile(fav_icon);
    deleteSinglefile(company_logo);
    return res.status(400).send({ error: "Invalid Request: " + error });
  }
  //check image extention validation
  if (req.files.fav_icon[0]?.fieldname === "fav_icon") {
    if (ValidateImageExtension(req.files.fav_icon[0])) {
      deleteSinglefile(fav_icon);
      deleteSinglefile(company_logo);
      return res.status(400).send({
        error:
          "Please upload file having extensions .jpeg/.jpg/.png/.gif/.svg only.",
      });
    }
  }
  if (req.files.company_logo[0]?.fieldname === "company_logo") {
    if (ValidateImageExtension(req.files.company_logo[0])) {
      deleteSinglefile(fav_icon);
      deleteSinglefile(company_logo);
      return res.status(400).send({
        error:
          "Please upload file having extensions .jpeg/.jpg/.png/.gif/.svg only.",
      });
    }
  }
  //check site options meta already registred or not
  const getsiteoption = await SiteOptionMeta.findAll({
    where: {
      key: {
        [Op.in]: predefine_keys,
      },
    },
  });
  if (getsiteoption.length > 0) {
    //delete image from folder
    deleteSinglefile(fav_icon);
    deleteSinglefile(company_logo);
    return res
      .status(409)
      .send({ succes: false, message: "site options meta already registred" });
  }
  try {
    for (let index = 0; index < predefine_keys.length; index++) {
      if (predefine_keys[index] == "title") {
        await SiteOptionMeta.create({
          key: predefine_keys[index],
          value: req.body[predefine_keys[index]],
          created_by: verify_token?.id,
        });
      } else {
        await SiteOptionMeta.create({
          key: predefine_keys[index],
          value: predefine_keys[index] == "fav_icon" ? fav_icon : company_logo,
          created_by: verify_token?.id,
        });
      }
    }
    res.status(201).json({
      success: true,
      message: "site option created successfylly!",
    });
  } catch (error) {
    deleteSinglefile(fav_icon);
    deleteSinglefile(company_logo);
    res.status(500).send(error.message);
  }
};
//edit site options
const ediSiteOptionMetaController = async (req, res) => {
  const verify_token = await decodeToken(req.headers["x-access-token"]);
  const { title } = req.body;
  let fav_icon = "",
    company_logo = "";
  if (req.files.fav_icon) {
    fav_icon = req.files.fav_icon[0]?.path;
  }
  if (req.files.company_logo) {
    company_logo = req.files.company_logo[0]?.path;
  }
  //check validation
  const { error, value } = siteOptionsMetaSchemaValidation.validate(
    {
      title,
      fav_icon,
      company_logo,
    },
    {
      abortEarly: false,
    }
  );
  if (error) {
    deleteSinglefile(fav_icon);
    deleteSinglefile(company_logo);
    return res.status(400).send({ error: "Invalid Request: " + error });
  }
  //check image extention validation
  if (req.files.fav_icon[0]?.fieldname === "fav_icon") {
    if (ValidateImageExtension(req.files.fav_icon[0])) {
      deleteSinglefile(fav_icon);
      deleteSinglefile(company_logo);
      return res.status(400).send({
        error:
          "Please upload file having extensions .jpeg/.jpg/.png/.gif/.svg only.",
      });
    }
  }
  if (req.files.company_logo[0]?.fieldname === "company_logo") {
    if (ValidateImageExtension(req.files.company_logo[0])) {
      deleteSinglefile(fav_icon);
      deleteSinglefile(company_logo);
      return res.status(400).send({
        error:
          "Please upload file having extensions .jpeg/.jpg/.png/.gif/.svg only.",
      });
    }
  }
  try {
    const get_site_options = await SiteOptionMeta.findAll({
      where: {
        key: {
          [Op.in]: predefine_keys,
        },
      },
    });
    const meta_keys = [];
    if (get_site_options.length > 0) {
      get_site_options.map((data) => {
        meta_keys.push(data?.key);
        if (data?.key === "fav_icon" || data?.key === "company_logo") {
          deleteSinglefile(data?.value);
        }
      });
    }
    if (meta_keys.length > 0) {
      for (let index = 0; index < meta_keys.length; index++) {
        if (
          predefine_keys[index] == "fav_icon" ||
          predefine_keys[index] == "company_logo"
        ) {
          await SiteOptionMeta.update(
            {
              value:
                predefine_keys[index] == "fav_icon" ? fav_icon : company_logo,
              update_by: verify_token?.id,
            },
            {
              where: { key: predefine_keys[index] },
            }
          );
        } else {
          await SiteOptionMeta.update(
            {
              value: req.body[predefine_keys[index]],
              update_by: verify_token?.id,
            },
            {
              where: {
                key: [predefine_keys[index]],
              },
            }
          );
        }
      }
      res.status(202).json({
        succes: true,
        message: "site option meta updated successfully",
      });
    } else {
      for (let index = 0; index < predefine_keys.length; index++) {
        if (predefine_keys[index] == "title") {
          await SiteOptionMeta.create({
            key: predefine_keys[index],
            value: req.body[predefine_keys[index]],
            created_by: verify_token?.id,
          });
        } else {
          await SiteOptionMeta.create({
            key: predefine_keys[index],
            value:
              predefine_keys[index] == "fav_icon" ? fav_icon : company_logo,
            created_by: verify_token?.id,
          });
        }
      }
      res.status(201).json({
        success: true,
        message: "site option meta updated successfylly!",
      });
    }
  } catch (error) {
    deleteSinglefile(fav_icon);
    deleteSinglefile(company_logo);
    res.status(500).send(error.message);
  }
};
//get site options meta controller
const getSiteOptionMetaController = async (req, res) => {
  try {
    const getsiteoption = await SiteOptionMeta.findAll({
      where: {
        key: {
          [Op.in]: predefine_keys,
        },
      },
    });
    if (getsiteoption.length > 0) {
      res.status(200).json({
        success: true,
        SiteOptionMeta: getsiteoption,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "not found",
        SiteOptionMeta: getsiteoption,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = {
  addSiteOptionMetaController,
  ediSiteOptionMetaController,
  getSiteOptionMetaController,
};
