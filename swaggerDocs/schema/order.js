const defaultProperties = {
  id: {
    type: "integer",
    description: "identification number",
    example: 1,
  },
};
const hotel_order_EntityProperties = {
  status: {
    type: "integer",
    description: "Order Status",
    example: 1,
  },
  order_type: {
    type: "string",
    description:
      "Order Type : means which type of order you are created like : hotel_order, space_order, automobile_order",
    example: "hotel_order",
  },
  amount: {
    type: "integer",
    description: "Order Amount",
    example: 201,
  },
  unique_transaction_id: {
    type: "string",
    description: "Order transaction id",
    example: "Trx-123456789",
  },
  user_id: {
    type: "integer",
    description: "User id",
    example: 1,
  },
  hotel_id: {
    type: "integer",
    description: "Hotel id",
    example: 2,
  },
  room_id: {
    type: "integer",
    description: "Room id",
    example: 1,
  },
  transaction_id: {
    type: "integer",
    description: "Transaction id",
    example: 1,
  },
  check_in_datetime: {
    type: "string",
    description: "Hotel Check in date time",
    example: "2023-08-07 11:22:04",
  },
  check_out_datetime: {
    type: "string",
    description: "Hotel Check out date time",
    example: "2023-08-07 11:22:04",
  },
  guest_details: {
    type: "string",
    description: "Total guest",
    example: `[{"name": "shubham kumar jaiswal","date_of_birth": "199-02-11","gender": "male"},{"name": "shubham kumar jaiswal","date_of_birth": "199-02-11","gender": "male"}]`,
  },
};
const get_hotel_order_EntityProperties = {
  ...defaultProperties,
  order_id: {
    type: "string",
    example: "#16932035590214ul80vlluhojn1",
  },
  status: {
    type: "integer",
    description: "Order Status",
    example: 1,
  },
  order_type: {
    type: "string",
    description:
      "Order Type : means which type of order you are created like : hotel_order, space_order, automobile_order",
    example: "hotel_order",
  },
  amount: {
    type: "integer",
    description: "Order Amount",
    example: 201,
  },
  unique_transaction_id: {
    type: "string",
    description: "Order transaction id",
    example: "Trx-123456789",
  },
};
const space_order_EntityProperties = {
  status: {
    type: "integer",
    description: "Order Status",
    example: 1,
  },
  order_type: {
    type: "string",
    description:
      "Order Type : means which type of order you are created like : hotel_order, space_order, automobile_order",
    example: "space_order",
  },
  amount: {
    type: "integer",
    description: "Order Amount",
    example: 201,
  },
  unique_transaction_id: {
    type: "string",
    description: "Order transaction id",
    example: "Trx-123456789",
  },
  user_id: {
    type: "integer",
    description: "User id",
    example: 1,
  },
  space_id: {
    type: "integer",
    description: "Space id",
    example: 2,
  },
  total_person: {
    type: "integer",
    description: "Total Person",
    example: 50,
  },
  transaction_id: {
    type: "integer",
    description: "Transaction id",
    example: 1,
  },
  check_in_datetime: {
    type: "string",
    description: "Hotel Check in date time",
    example: "2023-08-07 11:22:04",
  },
  check_out_datetime: {
    type: "string",
    description: "Hotel Check out date time",
    example: "2023-08-07 11:22:04",
  },
};
const get_space_order_EntityProperties = {
  ...defaultProperties,
  status: {
    type: "integer",
    description: "Order Status",
    example: 1,
  },
  order_type: {
    type: "string",
    description:
      "Order Type : means which type of order you are created like : hotel_order, space_order, automobile_order",
    example: "space_order",
  },
  order_id: { type: "string", example: "#16932149506034ulfxvlluogpfv" },
  amount: {
    type: "integer",
    description: "Order Amount",
    example: 201,
  },
  unique_transaction_id: {
    type: "string",
    description: "Order transaction id",
    example: "Trx-123456789",
  },
};
const automobile_order_EntityProperties = {
  status: {
    type: "integer",
    description: "Order Status",
    example: 1,
  },
  order_type: {
    type: "string",
    description:
      "Order Type : means which type of order you are created like : hotel_order, space_order, automobile_order",
    example: "autoobile_order",
  },
  amount: {
    type: "integer",
    description: "Order Amount",
    example: 201,
  },
  unique_transaction_id: {
    type: "string",
    description: "Order transaction id",
    example: "Trx-123456789",
  },
  user_id: {
    type: "integer",
    description: "User id",
    example: 1,
  },
  automobile_id: {
    type: "integer",
    description: "Automobile id",
    example: 2,
  },
  driver_id: {
    type: "integer",
    description: "Driver id",
    example: 2,
  },
  transaction_id: {
    type: "integer",
    description: "Transaction id",
    example: 1,
  },
  auto_mobile_source: {
    type: "string",
    description: "Pickup location",
    example: "",
  },
  auto_mobile_destination: {
    type: "string",
    description: "Drop Location",
    example: "",
  },
  check_in_datetime: {
    type: "string",
    description: "Hotel Check in date time",
    example: "2023-08-07 11:22:04",
  },
  check_out_datetime: {
    type: "string",
    description: "Hotel Check out date time",
    example: "2023-08-07 11:22:04",
  },
};
const get_automobile_order_EntityProperties = {
  ...defaultProperties,
  status: {
    type: "integer",
    description: "Order Status",
    example: 1,
  },
  order_type: {
    type: "string",
    description:
      "Order Type : means which type of order you are created like : hotel_order, space_order, automobile_order",
    example: "automobile_order",
  },
  order_id: { type: "string", example: "#16932149506034ulfxvlluogpfv" },
  amount: {
    type: "integer",
    description: "Order Amount",
    example: 201,
  },
  unique_transaction_id: {
    type: "string",
    description: "Order transaction id",
    example: "Trx-123456789",
  },
};

const order_meta = {
  type: "object",
  properties: {
    key: { type: "string", example: "user_id" },
    value: { type: "integer", example: 2 },
  },
};

const order_items_meta = {
  type: "object",
  properties: {
    key: { type: "string", example: "hotel_details" },
    value: { type: "string", example: '{"hotel_name":"dsjfkhgk"}' },
  },
};

const order_items = {
  type: "object",
  properties: {
    order_id: { type: "integer", example: 2 },
    order_type: { type: "string", example: "hotel_order" },
    object_id: { type: "integer", example: 1 },
    order_items_meta: { ...order_items_meta },
  },
};

const get_order_details_properties = {
  type: "object",
  properties: {
    ...defaultProperties,
    ...get_hotel_order_EntityProperties,
    order_meta: { ...order_meta },
    order_items: { ...order_items },
  },
};

const createHotelOrder = {
  type: "object",
  properties: {
    ...hotel_order_EntityProperties,
  },
};

const getcreateHotelOrder = {
  type: "object",
  properties: {
    ...get_hotel_order_EntityProperties,
  },
};

module.exports = {
  createHotelOrder: createHotelOrder,
  getcreateHotelOrder: getcreateHotelOrder,
  get_order_details_properties: get_order_details_properties,
  space_order_EntityProperties: space_order_EntityProperties,
  get_space_order_EntityProperties: get_space_order_EntityProperties,
  automobile_order_EntityProperties: automobile_order_EntityProperties,
  get_automobile_order_EntityProperties: get_automobile_order_EntityProperties,
};
