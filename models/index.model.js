const Sequelize = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelize(
  process.env.DBNAME,
  process.env.DBUSER,
  process.env.DBPASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = require("./user.model")(sequelize, Sequelize);
db.Role = require("./role.model")(sequelize, Sequelize);
db.Hotel = require("./hotel.model")(sequelize, Sequelize);
db.HotelMeta = require("./hotel.meta")(sequelize, Sequelize);
db.Room = require("./room.model")(sequelize, Sequelize);
db.Space = require("./space.model")(sequelize, Sequelize);
db.SpaceMeta = require("./space.meta")(sequelize, Sequelize);
db.Automobile = require("./auto.mobile")(sequelize, Sequelize);
db.AutoMobileMeta = require("./auto.mobile.meta")(sequelize, Sequelize);
db.TypeIdentifier = require("./type.identifier")(sequelize, Sequelize);
db.CategoriesAmenities = require("./categories_amenities.model")(
  sequelize,
  Sequelize
);
db.Order = require("./order.model")(sequelize, Sequelize);
db.Transaction = require("./transaction.model")(sequelize, Sequelize);
db.OrderMeta = require("./order_meta")(sequelize, Sequelize);
db.OrderItems = require("./order.items")(sequelize, Sequelize);
db.OrderItemsMeta = require("./order.items.meta")(sequelize, Sequelize);

//orders joins
db.Order.hasMany(db.OrderMeta, { foreignKey: "order_id" });
db.OrderMeta.belongsTo(db.Order, { foreignKey: "order_id" });

db.Order.hasMany(db.OrderItems, { foreignKey: "order_id" });
db.OrderItems.belongsTo(db.Order, { foreignKey: "order_id" });

db.OrderItems.hasMany(db.OrderItemsMeta, { foreignKey: "order_item_id" });
db.OrderItemsMeta.belongsTo(db.OrderItems, { foreignKey: "order_item_id" });

//hotels joins
db.Hotel.hasMany(db.HotelMeta, { foreignKey: "hotel_id" });
db.HotelMeta.belongsTo(db.Hotel, { foreignKey: "hotel_id" });
db.Hotel.hasMany(db.Room, { foreignKey: "hotel_id" });
db.Room.belongsTo(db.Hotel, { foreignKey: "hotel_id" });

//space joins
db.Space.hasMany(db.SpaceMeta, { foreignKey: "space_id" });
db.SpaceMeta.belongsTo(db.Space, { foreignKey: "space_id" });

//automobile joins
db.Automobile.hasMany(db.AutoMobileMeta, { foreignKey: "auto_mobile_id" });
db.AutoMobileMeta.belongsTo(db.Automobile, { foreignKey: "auto_mobile_id" });

//export db
module.exports = db;
