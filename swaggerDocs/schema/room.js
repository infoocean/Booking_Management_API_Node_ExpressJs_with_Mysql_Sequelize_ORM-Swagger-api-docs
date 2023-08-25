const defaultProperties = {
  id: {
    type: "integer",
    description: "identification number",
    example: 1,
  },
};

const roomEntityProperties = {
  title: {
    type: "string",
    description: "Room name",
    example: "Premium R",
  },
  room_number: {
    type: "integer",
    description: "Room number",
    example: 201,
  },
  description: {
    type: "string",
    description: "Short information of abount room",
    example:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
  },
  image: {
    type: "string",
    description: "Room single image",
    format: "binary",
  },
  gallary_image: {
    type: "string",
    description: "Room gallary images",
    format: "binary",
  },
  guest_capacity: {
    type: "integer",
    description: "Total capacity of guest in room",
    example: 2,
  },
  room_type: {
    type: "string",
    description:
      "Type of room : like - single room, double room, family room, living room, dining room, suite room etc",
    example: "single",
  },
  status: {
    type: "integer",
    description:
      "Status of room active or inactive :  0 means inactive 1 means active",
    example: 1,
  },
  cost_per_day: {
    type: "integer",
    description: "Per day amount(cost) of room",
    example: 200,
  },
  cost_per_hour: {
    type: "integer",
    description: "Per hour amount(cost) of room",
    example: 200,
  },
  room_size: {
    type: "string",
    description: "Total size of room in sq.ft",
    example: "301 sq.ft",
  },
  hotel_id: {
    type: "integer",
    description: "Associated hotel for this room ",
    example: 1,
  },
};

const getRoom = {
  type: "object",
  properties: {
    ...defaultProperties,
    ...roomEntityProperties,
  },
};

const createRoom = {
  type: "object",
  properties: {
    ...roomEntityProperties,
  },
};

module.exports = {
  createRoom: createRoom,
  getRoom: getRoom,
};
