const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HotelMeta extends Model {
    static associate(model) {}
  }
  HotelMeta.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      key: {
        type: DataTypes.STRING,
      },
      value: {
        type: DataTypes.STRING,
      },
      hotel_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "hotels_meta",
    }
  );
  return HotelMeta;
};
