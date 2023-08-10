const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(model) {}
  }
  Room.init(
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
      room_number: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.STRING,
      },
      guest_capacity: {
        type: DataTypes.INTEGER,
      },
      room_type: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      gallary_image: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.INTEGER,
      },
      cost_per_day: {
        type: DataTypes.FLOAT,
      },
      hotel_id: {
        type: DataTypes.INTEGER,
      },
      cost_per_hour: {
        type: DataTypes.FLOAT,
      },
      room_size: {
        type: DataTypes.STRING,
      },
      created_by: {
        type: DataTypes.INTEGER,
      },
      updated_by: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "hotels_rooms",
    }
  );
  return Room;
};
