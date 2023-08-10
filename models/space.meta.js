const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SpaceMeta extends Model {
    static associate(model) {}
  }
  SpaceMeta.init(
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
      space_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "space_meta",
    }
  );
  return SpaceMeta;
};
