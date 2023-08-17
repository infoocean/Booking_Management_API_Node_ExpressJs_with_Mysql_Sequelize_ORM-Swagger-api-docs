const {
  deleteMultiplefile,
  deleteSinglefile,
} = require("../../common/commonfn");
const { hotel_defaine_arr } = require("../../common/default_array");
const { decodeToken } = require("../../helper/helperfn");
const db = require("../../models/index.model");
const Hotel = db.Hotel;
const HotelMeta = db.HotelMeta;
const CategoriesAmenities = db.CategoriesAmenities;

//add hotel controller
const addHotelController = async (req, res) => {
  const verify_token = await decodeToken(req.headers["x-access-token"]);
  const { title, slug, status, user_id } = req.body;
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
    const findhotel = await Hotel.findOne({
      where: { title: title },
    });
    if (findhotel) {
      //removing images from folder
      deleteSinglefile(image);
      deleteMultiplefile(gallary_image);
      res.status(409).json({
        success: false,
        error: "title already registered!",
      });
    } else {
      const hotel = await Hotel.create({
        title: title,
        slug: slug,
        status: status,
        user_id: user_id,
        created_by: verify_token?.id,
      });
      if (hotel) {
        let hotel_meta_keys = ["image", "gallary_image"];
        Object.keys(req.body).filter((key) => {
          if (!hotel_defaine_arr.includes(key)) {
            hotel_meta_keys.push(key);
          }
        });
        for (let index = 0; index < hotel_meta_keys.length; index++) {
          if (
            hotel_meta_keys[index] === "image" ||
            hotel_meta_keys[index] === "gallary_image"
          ) {
            await HotelMeta.create({
              key: hotel_meta_keys[index],
              value:
                hotel_meta_keys[index] === "image"
                  ? image
                  : gallary_image.length > 0
                  ? JSON.stringify(gallary_image)
                  : "",
              hotel_id: hotel?.id,
            });
          } else {
            await HotelMeta.create({
              key: hotel_meta_keys[index],
              value: req.body[hotel_meta_keys[index]]
                ? req.body[hotel_meta_keys[index]]
                : "",
              hotel_id: hotel?.id,
            });
          }
        }
      }
      res.status(201).json({
        success: true,
        message: "Hotel created successfylly!",
        hotel: hotel,
      });
    }
  } catch (error) {
    res.status(500).send({ error: true, error: error, message: error.message });
  }
};

//get hotels  controller
const getHotelController = async (req, res) => {
  try {
    const findHotel = await Hotel.findAll({
      include: [
        {
          model: HotelMeta,
          attributes: ["key", "value"],
        },
      ],
    });
    if (findHotel.length > 0) {
      res.status(200).json({
        success: true,
        hotels: findHotel,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "hotel not found",
        hotels: findHotel,
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

//get hotel by id  controller with rooms
const getHotelByIdController = async (req, res) => {
  try {
    const findHotel = await Hotel.findByPk(req.params.id, {
      include: [
        {
          model: HotelMeta,
          attributes: ["key", "value"],
        },
        {
          model: db.Room,
        },
      ],
    });
    if (findHotel) {
      res.status(200).json({
        success: true,
        hotels: findHotel,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "hotel not found",
        hotels: findHotel,
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

//get hotel details by id  controller
const getHotelDetailsByIdController = async (req, res) => {
  try {
    const findHotel = await Hotel.findByPk(req.params.id, {
      include: [
        {
          model: HotelMeta,
          attributes: ["key", "value"],
        },
      ],
    });
    if (findHotel) {
      res.status(200).json({
        success: true,
        hotels: findHotel,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "hotel not found",
        hotels: findHotel,
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

//edit hotel by id  controller
const editHotelByIdController = async (req, res) => {
  const verify_token = await decodeToken(req.headers["x-access-token"]);
  const { title, slug, status, user_id } = req.body;
  const getHotel = await Hotel.findByPk(req.params.id);
  if (!getHotel) {
    return res.status(404).json({
      success: false,
      message: "hotel not found",
    });
  }
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
    const findregisterhotel = await Hotel.findOne({
      where: { id: req.params.id },
    });
    if (findregisterhotel) {
      const editHotel = await Hotel.update(
        {
          title: title,
          slug: slug,
          status: status,
          user_id: user_id,
          updated_by: verify_token?.id,
        },
        { where: { id: req.params.id } }
      );
      if (editHotel[0] == 1) {
        let hotel_meta_keys = ["image", "gallary_image"];
        Object.keys(req.body).filter((key) => {
          if (!hotel_defaine_arr.includes(key)) {
            hotel_meta_keys.push(key);
          }
        });
        const hotel_meta_keys_lgh = hotel_meta_keys.length;
        //get allready register keys and value
        const find_allready_register_keys = await HotelMeta.findAll({
          where: {
            hotel_id: req.params.id,
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
        for (let index = 0; index < hotel_meta_keys_lgh; index++) {
          if (
            hotel_meta_keys[index] == "image" ||
            hotel_meta_keys[index] == "gallary_image"
          ) {
            await HotelMeta.update(
              {
                value:
                  hotel_meta_keys[index] === "image"
                    ? image
                    : gallary_image.length > 0
                    ? JSON.stringify(gallary_image)
                    : "",
              },
              {
                where: { hotel_id: req.params.id, key: hotel_meta_keys[index] },
              }
            );
          } else {
            if (dt.includes(hotel_meta_keys[index])) {
              await HotelMeta.update(
                {
                  value: req.body[hotel_meta_keys[index]],
                },
                {
                  where: {
                    hotel_id: req.params.id,
                    key: [hotel_meta_keys[index]],
                  },
                }
              );
            } else {
              await HotelMeta.create({
                key: hotel_meta_keys[index],
                value: req.body[hotel_meta_keys[index]]
                  ? req.body[hotel_meta_keys[index]]
                  : "",
                hotel_id: req.params.id,
              });
            }
          }
        }
        res.status(202).json({
          succes: true,
          message: "hotel updated successfully",
        });
      }
    } else {
      res.status(409).json({
        success: false,
        error: "Hotel Name already registered!",
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//delete hotel by id  controller
const deleteHotelByIdController = async (req, res) => {
  const verify_token = await decodeToken(req.headers["x-access-token"]);
  try {
    const deleteHotel = await Hotel.update(
      {
        is_deleted: 1,
        deleted_by: verify_token?.id,
      },
      { where: { id: req.params.id } }
    );
    if (deleteHotel[0] == 1) {
      res.status(202).json({
        succes: true,
        message: "hotel deleted successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "hotel not found!",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

//get hotel categories  controller
const getHotelcategoriesController = async (req, res) => {
  try {
    const findHotelCategories = await CategoriesAmenities.findAll({
      where: {
        type_identifier_id: req.query.type_identifier_id
          ? req.query.type_identifier_id
          : 1,
      },
    });
    if (findHotelCategories.length > 0) {
      res.status(200).json({
        success: true,
        hotelCategories: findHotelCategories,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "hotel categories not found",
        hotelCategories: findHotelCategories,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//get hotel categories  controller
const getHotelAmenitiesController = async (req, res) => {
  try {
    const findHotelAmenities = await CategoriesAmenities.findAll({
      where: {
        type_identifier_id: req.query.type_identifier_id
          ? req.query.type_identifier_id
          : 2,
      },
    });
    if (findHotelAmenities.length > 0) {
      res.status(200).json({
        success: true,
        hotelAmenities: findHotelAmenities,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "hotel Amenities not found",
        hotelAmenities: findHotelAmenities,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  addHotelController,
  getHotelController,
  getHotelByIdController,
  editHotelByIdController,
  deleteHotelByIdController,
  getHotelcategoriesController,
  getHotelAmenitiesController,
  getHotelDetailsByIdController,
};
