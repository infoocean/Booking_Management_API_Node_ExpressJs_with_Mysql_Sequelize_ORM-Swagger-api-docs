const { decodeToken } = require("../../helper/helperfn");
const db = require("../../models/index.model");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const SiteOptionMeta = db.SiteOptionMeta;
const predefine_keys = ["title", "fav_icon", "company_logo"];
//add site options meta controller
const addSiteOptionMetaController = async (req, res) => {
  const verify_token = await decodeToken(req.headers["x-access-token"]);
  const getsiteoption = await SiteOptionMeta.findAll({
    where: {
      key: {
        [Op.in]: predefine_keys,
      },
    },
  });
  if (getsiteoption.length > 0) {
    return res
      .status(409)
      .send({ succes: false, message: "site option meta already registred" });
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
          value:
            predefine_keys[index] == "fav_icon"
              ? req.files.fav_icon[0]?.path
              : req.files.company_logo[0]?.path,
          created_by: verify_token?.id,
        });
      }
    }
    res.status(201).json({
      success: true,
      message: "site option created successfylly!",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
//edit site options
const ediSiteOptionMetaController = async (req, res) => {
  const verify_token = await decodeToken(req.headers["x-access-token"]);
  try {
    const get_site_options = await SiteOptionMeta.findAll({
      where: {
        key: {
          [Op.in]: predefine_keys,
        },
      },
    });
    const dt = [];
    get_site_options.map((data) => {
      dt.push(data?.key);
    });
    if (dt.length > 0) {
      for (let index = 0; index < dt.length; index++) {
        console.log(predefine_keys[index]);
        if (
          predefine_keys[index] == "fav_icon" ||
          predefine_keys[index] == "company_logo"
        ) {
          await SiteOptionMeta.update(
            {
              value:
                SiteOptionMeta[index] == "fav_icon"
                  ? req.files.fav_icon[0]?.path
                  : req.files.company_logo[0]?.path,
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
        message: "site option meta  updated successfully",
      });
    }
  } catch (error) {
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
