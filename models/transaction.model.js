const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(model) {}
  }
  Transaction.init(
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
      amount: {
        type: DataTypes.INTEGER,
      },
      txn_id: {
        type: DataTypes.STRING,
      },
      payment_method: {
        type: DataTypes.STRING,
      },
      RCT_number: {
        type: DataTypes.STRING,
      },
      created_by: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "transactions",
    }
  );
  return Transaction;
};
