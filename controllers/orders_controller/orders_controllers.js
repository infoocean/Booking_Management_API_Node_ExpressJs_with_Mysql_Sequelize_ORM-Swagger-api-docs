const { decodeToken } = require("../../helper/helperfn");
const db = require("../../models/index.model");
const { generateOrderId } = require("../../common/commonfn");
const Order = db.Order;
const OrderMeta = db.OrderMeta;
const OrderItems = db.OrderItems;
const OrderItemsMeta = db.OrderItemsMeta;
const Room = db.Room;
const User = db.User;
const Hotel = db.Hotel;
const Space = db.Space;
const Automobile = db.Automobile;

//add order controller
const addOrderController = async (req, res) => {
  const verify_token = await decodeToken(req.headers["x-access-token"]);
  const {
    status,
    order_type,
    amount,
    unique_transaction_id,
    user_id,
    hotel_id,
    room_id,
    transaction_id,
    space_id,
    guest_details,
    total_person,
    automobile_id,
    driver_id,
    check_in_datetime,
    check_out_datetime,
    auto_mobile_source,
    auto_mobile_destination,
  } = req.body;

  try {
    const order = await Order.create({
      order_id: await generateOrderId(),
      status: status,
      order_type: order_type,
      amount: amount,
      unique_transaction_id: unique_transaction_id,
      created_by: verify_token?.id,
    });
    if (order) {
      switch (order_type) {
        case "hotel_order":
          const hotel_meta_keys = [
            "user_id",
            "hotel_id",
            "room_id",
            "transaction_id",
            "check_in_datetime",
            "check_out_datetime",
          ];
          const hotel_meta_key_length = hotel_meta_keys.length;
          for (let index = 0; index < hotel_meta_key_length; index++) {
            await OrderMeta.create({
              order_id: order?.id,
              key: hotel_meta_keys[index],
              value: req.body[hotel_meta_keys[index]],
            });
          }
          const create_order_items = await OrderItems.create({
            order_id: order?.id,
            order_type: "hotel_order",
            object_id: room_id,
          });
          //get user details
          const findUser = await User.findByPk(user_id);
          //get hotels details
          const findHotel = await Hotel.findByPk(hotel_id);
          //get rooms details
          const findRoom = await Room.findByPk(room_id);
          const order_items_meta_keys = [
            "user_details",
            "guest_details",
            "room_details",
            "hotel_details",
          ];
          const order_items_meta_keys_length = order_items_meta_keys.length;
          for (let index = 0; index < order_items_meta_keys_length; index++) {
            await OrderItemsMeta.create({
              order_item_id: create_order_items?.id,
              key: order_items_meta_keys[index],
              value:
                order_items_meta_keys[index] === "user_details"
                  ? findUser?.first_name + " " + findUser?.last_name
                  : order_items_meta_keys[index] === "guest_details"
                  ? JSON.stringify(guest_details)
                  : order_items_meta_keys[index] === "room_details"
                  ? JSON.stringify({
                      room_name: findRoom?.title,
                      room_size: findRoom?.room_size,
                    })
                  : order_items_meta_keys[index] === "hotel_details"
                  ? JSON.stringify({
                      hotel_name: findHotel?.title,
                    })
                  : "",
            });
          }
          break;
        case "space_order":
          const space_meta_keys = [
            "user_id",
            "space_id",
            "transaction_id",
            "check_in_datetime",
            "check_out_datetime",
          ];
          const space_meta_key_length = space_meta_keys.length;
          for (let index = 0; index < space_meta_key_length; index++) {
            await OrderMeta.create({
              order_id: order?.id,
              key: space_meta_keys[index],
              value: req.body[space_meta_keys[index]],
            });
          }
          const create_space_order_items = await OrderItems.create({
            order_id: order?.id,
            order_type: "space_order",
            object_id: space_id,
          });
          //get user details
          const findSpaceUser = await User.findByPk(user_id);
          //get space details
          const findspace = await Space.findByPk(space_id);
          const space_order_items_meta_keys = [
            "user_details",
            "total_persons",
            "space_details",
          ];
          const space_order_items_meta_keys_length =
            space_order_items_meta_keys.length;
          for (
            let index = 0;
            index < space_order_items_meta_keys_length;
            index++
          ) {
            await OrderItemsMeta.create({
              order_item_id: create_space_order_items?.id,
              key: space_order_items_meta_keys[index],
              value:
                space_order_items_meta_keys[index] === "user_details"
                  ? findSpaceUser?.first_name + " " + findSpaceUser?.last_name
                  : space_order_items_meta_keys[index] === "total_persons"
                  ? total_person
                  : space_order_items_meta_keys[index] === "space_details"
                  ? JSON.stringify({
                      space_name: findspace?.title,
                      space_size: findspace?.space_size,
                    })
                  : "",
            });
          }
          break;
        case "automobile_order":
          const automobile_meta_keys = [
            "user_id",
            "automobile_id",
            "transaction_id",
            "auto_mobile_source",
            "auto_mobile_destination",
            "check_in_datetime",
            "check_out_datetime",
          ];
          const automobile_meta_keys_length = automobile_meta_keys.length;
          for (let index = 0; index < automobile_meta_keys_length; index++) {
            await OrderMeta.create({
              order_id: order?.id,
              key: automobile_meta_keys[index],
              value: req.body[automobile_meta_keys[index]],
            });
          }
          const create_automobile_order_items = await OrderItems.create({
            order_id: order?.id,
            order_type: "automobile_order",
            object_id: automobile_id,
          });
          //get user details
          const findAutomobileUser = await User.findByPk(user_id);
          //get automobile details
          const findautomobile = await Automobile.findByPk(automobile_id);
          //find driver details
          const findAutomobileDriver = await User.findByPk(driver_id);
          const automobile_order_items_meta_keys = [
            "user_details",
            "driver_details",
            "automobile_details",
          ];
          const create_automobile_order_items_length =
            automobile_order_items_meta_keys.length;
          for (
            let index = 0;
            index < create_automobile_order_items_length;
            index++
          ) {
            await OrderItemsMeta.create({
              order_item_id: create_automobile_order_items?.id,
              key: automobile_order_items_meta_keys[index],
              value:
                automobile_order_items_meta_keys[index] === "user_details"
                  ? findAutomobileUser?.first_name +
                    " " +
                    findAutomobileUser?.last_name
                  : automobile_order_items_meta_keys[index] === "driver_details"
                  ? findAutomobileDriver?.first_name +
                    " " +
                    findAutomobileDriver?.last_name
                  : automobile_order_items_meta_keys[index] ===
                    "automobile_details"
                  ? JSON.stringify({
                      automobile_name: findautomobile?.auto_mobile_name,
                      auto_mobile_type: findautomobile?.auto_mobile_type,
                      auto_mobile_number: findautomobile?.auto_mobile_number,
                      auto_mobile_brand: findautomobile?.auto_mobile_brand,
                      seater: findautomobile?.seater,
                      auto_mobile_categories:
                        findautomobile?.auto_mobile_categories,
                      cost_per_km: findautomobile?.cost_per_km,
                    })
                  : "",
            });
          }
          break;
        default:
          await Order.destroy({
            where: {
              id: order?.id,
            },
          });
          return res.status(400).send({
            success: false,
            message: "please inter valid order type ",
          });
      }
    }
    res.status(201).json({
      success: true,
      message: "order created successfylly!",
      order: order,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//get Orders controller
const getOrdersController = async (req, res) => {
  try {
    const findorders = await Order.findAll();
    if (findorders.length > 0) {
      res.status(200).json({
        success: true,
        orders: findorders,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "orders not found",
        orders: findorders,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//get Order by id controller
const getOrderByIdController = async (req, res) => {
  try {
    const findOrder = await Order.findByPk(req.params.id, {
      include: [
        {
          model: OrderMeta,
          attributes: ["key", "value"],
        },
        {
          model: OrderItems,
          attributes: ["order_id", "order_type", "object_id"],
          include: [
            {
              model: OrderItemsMeta,
              attributes: ["key", "value"],
            },
          ],
        },
      ],
    });
    if (findOrder) {
      res.status(200).json({
        succes: true,
        order: findOrder,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "order not found!",
        order: findOrder,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  addOrderController,
  getOrdersController,
  getOrderByIdController,
};
