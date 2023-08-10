const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Space extends Model {
    static associate(model) {}
  }
  Space.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      slug: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.INTEGER,
      },
      space_size: {
        type: DataTypes.STRING,
      },
      guest_capacity: {
        type: DataTypes.INTEGER,
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
      cost_per_hour: {
        type: DataTypes.INTEGER,
      },
      cost_per_day: {
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
      modelName: "spaces",
    }
  );
  return Space;
};
