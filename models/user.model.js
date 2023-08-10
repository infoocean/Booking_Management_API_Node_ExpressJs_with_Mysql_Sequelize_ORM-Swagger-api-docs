const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(model) {}
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      first_name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      phone_number: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      date_of_birth: {
        type: DataTypes.STRING,
      },
      role_id: {
        type: DataTypes.INTEGER,
      },
      is_deleted: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return User;
};
