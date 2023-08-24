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
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
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
    description: "Total capacity of guest",
    example: 2,
  },
  room_type: {
    type: "string",
    description: "Types of room",
    example: "single",
  },
  status: {
    type: "integer",
    description: "Status of room available or not",
    example: 1,
  },
  cost_per_day: {
    type: "integer",
    description: "Per day amount of room",
    example: 200,
  },
  cost_per_hour: {
    type: "integer",
    description: "Per hour amount of room",
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
