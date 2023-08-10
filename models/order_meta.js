const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderMeta extends Model {
    static associate(model) {}
  }
  OrderMeta.init(
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
      order_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "order_meta",
    }
  );
  return OrderMeta;
};
