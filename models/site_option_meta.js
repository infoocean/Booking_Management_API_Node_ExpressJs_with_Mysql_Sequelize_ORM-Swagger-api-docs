const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SiteOptionMeta extends Model {
    static associate(model) {}
  }
  SiteOptionMeta.init(
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
      created_by: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "site_options",
    }
  );
  return SiteOptionMeta;
};
