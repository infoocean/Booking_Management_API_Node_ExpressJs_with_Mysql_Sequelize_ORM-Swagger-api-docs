const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CategoriesAmenities extends Model {
    static associate(model) {}
  }
  CategoriesAmenities.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      slug: {
        type: DataTypes.STRING,
      },
      type_identifier_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "type_identifier_details",
    }
  );
  return CategoriesAmenities;
};
