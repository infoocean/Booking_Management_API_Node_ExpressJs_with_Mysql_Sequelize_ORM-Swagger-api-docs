const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AutoMobile extends Model {
    static associate(model) {}
  }
  AutoMobile.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      auto_mobile_categories: {
        type: DataTypes.STRING,
      },
      auto_mobile_name: {
        type: DataTypes.STRING,
      },
      auto_mobile_number: {
        type: DataTypes.STRING,
      },
      auto_mobile_brand: {
        type: DataTypes.STRING,
      },
      auto_mobile_type: {
        type: DataTypes.STRING,
      },
      rc_number: {
        type: DataTypes.STRING,
      },
      seater: {
        type: DataTypes.STRING,
      },
      cost_per_km: {
        type: DataTypes.STRING,
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.INTEGER,
      },
      created_by: {
        type: DataTypes.INTEGER,
      },
      is_deleted: {
        type: DataTypes.INTEGER,
      },
      updated_by: {
        type: DataTypes.INTEGER,
      },
      deleted_by: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "auto_mobiles",
    }
  );
  return AutoMobile;
};
