const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderItemsMeta extends Model {
    static associate(model) {}
  }
  OrderItemsMeta.init(
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
      order_item_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "order_items_meta",
    }
  );
  return OrderItemsMeta;
};
