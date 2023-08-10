const db = require("../../models/index.model");
const CategoriesAmenities = db.CategoriesAmenities;

// add hotels, spaces and automobile  categories and amenities controller
const AddCategoriesAmenitiesController = async (req, res) => {
  const { name, slug, type_identifier_id } = req.body;
  try {
    const findCategoriesAmenities = await CategoriesAmenities.findOne({
      where: { name: name, type_identifier_id: type_identifier_id },
    });
    if (findCategoriesAmenities) {
      res.status(409).json({
        success: false,
        error: "name already registered!",
      });
    } else {
      const findCategoriesAmenities = await CategoriesAmenities.create({
        name: name,
        slug: slug,
        type_identifier_id: type_identifier_id,
      });
      res.status(201).json({
        success: true,
        message: "created successfylly!",
        data: findCategoriesAmenities,
      });
    }
  } catch (error) {
    res.status(500).send({ error: true, error: error, message: error.message });
  }
};

//get hotel, space, automobile  categories amenities controller
const getCategoriesAmenitiesbyidController = async (req, res) => {
  try {
    const findHotelCategoriesAmenities = await CategoriesAmenities.findByPk(
      req.params.id
    );
    if (findHotelCategoriesAmenities) {
      res.status(200).json({
        success: true,
        data: findHotelCategoriesAmenities,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "hotel categories not found",
        data: findHotelCategoriesAmenities,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//edit hotel space  automobile categories ameniries  controller
const editCategoriesAmenitiesbyidController = async (req, res) => {
  const { name } = req.body;
  try {
    const update = await CategoriesAmenities.update(
      {
        name: name,
      },
      { where: { id: req.params.id } }
    );
    if (update[0] == 1) {
      res.status(200).json({
        succes: true,
        message: " data updated successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "data not found",
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//get categories amtenities or other type details using type identifier id
const getCategoriesAmenitiesController = async (req, res) => {
  try {
    const gettype = await db.TypeIdentifier.findByPk(
      req.query.type_identifier_id
    );
    const findCategoriesAmenities = await CategoriesAmenities.findAll({
      where: { type_identifier_id: req.query.type_identifier_id },
    });
    if (findCategoriesAmenities.length > 0) {
      res.status(200).json({
        success: true,
        type: gettype?.type,
        data: findCategoriesAmenities,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "data not found",
        data: findCategoriesAmenities,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  AddCategoriesAmenitiesController,
  getCategoriesAmenitiesbyidController,
  editCategoriesAmenitiesbyidController,
  getCategoriesAmenitiesController,
};
