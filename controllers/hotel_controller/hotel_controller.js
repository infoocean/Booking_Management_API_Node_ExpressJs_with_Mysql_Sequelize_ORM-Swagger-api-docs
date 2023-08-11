const { default_arr } = require("../../common/default_array");
const { decodeToken } = require("../../helper/helperfn");
const db = require("../../models/index.model");
const Hotel = db.Hotel;
const HotelMeta = db.HotelMeta;
const CategoriesAmenities = db.CategoriesAmenities;

//add hotel controller
const addHotelController = async (req, res) => {
  const verify_token = await decodeToken(req.headers["x-access-token"]);
  const {
    title,
    slug,
    short_description,
    long_description,
    availability,
    status,
    user_id,
    location,
    city,
    booking_type,
    cancellation_pilicy,
    terms_condition,
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
    const findhotel = await Hotel.findOne({
      where: { title: title },
    });
    if (findhotel) {
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
        const default_arr_lgh = default_arr.length;
        for (let index = 0; index < default_arr_lgh; index++) {
          if (
            default_arr[index] === "image" ||
            default_arr[index] === "gallary_image"
          ) {
            await HotelMeta.create({
              key: default_arr[index],
              value:
                default_arr[index] === "image"
                  ? image
                  : gallary_image.length > 0
                  ? JSON.stringify(gallary_image)
                  : "",
              hotel_id: hotel?.id,
            });
          } else {
            await HotelMeta.create({
              key: default_arr[index],
              value: req.body[default_arr[index]]
                ? req.body[default_arr[index]]
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
  const {
    title,
    slug,
    short_description,
    long_description,
    availability,
    status,
    user_id,
    image,
    gallary_image,
    location,
    city,
    booking_type,
    cancellation_pilicy,
    terms_condition,
  } = req.body;
  const getHotel = await Hotel.findByPk(req.params.id);
  if (!getHotel) {
    return res.status(404).json({
      success: false,
      message: "hotel not found",
    });
  }
  try {
    const findregisterhotel = await Hotel.findOne({
      where: { title: title },
    });
    if (findregisterhotel && findregisterhotel?.id == req.params.id) {
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
        const default_arr_lgh = default_arr.length;
        for (let index = 0; index < default_arr_lgh; index++) {
          if (
            default_arr[index] === "image" ||
            default_arr[index] === "gallary_image"
          ) {
            await HotelMeta.update(
              {
                key: default_arr[index],
                value:
                  default_arr[index] === "image"
                    ? image
                    : gallary_image.length > 0
                    ? JSON.stringify(gallary_image)
                    : "",
              },
              { where: { hotel_id: req.params.id } }
            );
          } else {
            await HotelMeta.update(
              {
                key: default_arr[index],
                value: req.body[default_arr[index]]
                  ? req.body[default_arr[index]]
                  : "",
              },
              { where: { hotel_id: req.params.id } }
            );
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
