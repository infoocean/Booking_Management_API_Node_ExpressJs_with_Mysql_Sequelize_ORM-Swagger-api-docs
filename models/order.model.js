const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(model) {}
  }
  Order.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      order_id: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      },
      order_type: {
        type: DataTypes.STRING,
      },
      amount: {
        type: DataTypes.INTEGER,
      },
      unique_transaction_id: {
        type: DataTypes.STRING,
      },
      created_by: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "orders",
    }
  );
  return Order;
};
