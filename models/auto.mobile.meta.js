const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AutoMobileMeta extends Model {
    static associate(model) {}
  }
  AutoMobileMeta.init(
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
      auto_mobile_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "auto_mobile_meta",
    }
  );
  return AutoMobileMeta;
};
