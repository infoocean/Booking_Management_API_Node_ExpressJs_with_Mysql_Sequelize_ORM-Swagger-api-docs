const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderItems extends Model {
    static associate(model) {}
  }
  OrderItems.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      order_id: {
        type: DataTypes.INTEGER,
      },
      order_type: {
        type: DataTypes.STRING,
      },
      object_id: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "order_items",
    }
  );
  return OrderItems;
};
