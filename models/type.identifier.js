const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TypeIdentifier extends Model {
    static associate(model) {}
  }
  TypeIdentifier.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      type: {
        type: DataTypes.STRING,
      },
      slug: {
        type: DataTypes.STRING,
      },
      entity: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "type_identifiers",
    }
  );
  return TypeIdentifier;
};
