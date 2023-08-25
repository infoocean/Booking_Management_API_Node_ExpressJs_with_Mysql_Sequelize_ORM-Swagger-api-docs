const defaultProperties = {
  id: {
    type: "integer",
    description: "identification number",
    example: 1,
  },
};

const spacesEntityProperites = {
  title: {
    type: "string",
    description: "Space name",
    example: "Banquete Hall123",
  },
  slug: {
    type: "string",
    description: "Space slug",
    example: "Banquete_Hall",
  },
  status: {
    type: "integer",
    description:
      "Space status active or inactive 0 means inactive 1 means active",
    example: 1,
  },
  space_size: {
    type: "string",
    description: "Size of space in sq ft",
    example: "121 sq ft",
  },
  guest_capacity: {
    type: "integer",
    description: "Total capacity of guest in space",
    example: 20,
  },
  space_type: {
    type: "string",
    description: "Types of space",
    example: "Premium",
  },
  cost_per_hour: {
    type: "integer",
    description: "Per hour space amount(cost)",
    example: 100,
  },
  cost_per_day: {
    type: "integer",
    description: "Per day space amount(cost)",
    example: 200,
  },
  short_description: {
    type: "string",
    description: "Brief information of space",
    example:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
  },
  long_description: {
    type: "string",
    description: "More information of space",
    example:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.Contrary to popular belief.",
  },
  avalability: {
    type: "string",
    description: "Space availablity",
    example:
      '[{"day":"monday","status":"true","start_time":"9:00:AM","close_time":"11:00:PM","date":"2000-02-12"},{"day":"tuesday","status":"true","start_time":"9:00:AM","close_time":"11:00:PM","date":"2000-02-12"}]',
  },
  image: {
    type: "string",
    description: "Space single image",
    format: "binary",
  },
  gallary_image: {
    type: "string",
    description: "Space gallary images",
    format: "binary",
  },
  location: {
    type: "string",
    description: "Space location : which location space is associated",
    example: `{"latitude":"22.719568","longitude":"75.857727"}`,
  },
  city: {
    type: "string",
    description: "City of space : which city space is associated",
    example: "Indore",
  },
  booking_type: {
    type: "string",
    description: "Types of space booking",
    example:
      '{"is_hourly_booking":true, "is_day_boking":true,"is_monthly_booking":true}',
  },
  cancellation_pilicy: {
    type: "string",
    description: "Space cancellation policy",
    example: '["Ani", "Sam", "Joe"]',
  },
  terms_condition: {
    type: "string",
    description: "Space  terms and condition",
    example: '["Ani", "Sam", "Joe"]',
  },
  user_id: {
    type: "integer",
    description: "User Id of space owner",
    example: 2,
  },
};

const getSpaceProperties = {
  ...defaultProperties,
  title: {
    type: "string",
    description: "Space name",
    example: "Banquete Hall123",
  },
  slug: {
    type: "string",
    description: "Space slug",
    example: "Banquete_Hall",
  },
  status: {
    type: "integer",
    description:
      "Space status active or inactive 0 means inactive 1 means active",
    example: 1,
  },
  space_size: {
    type: "string",
    description: "Size of space in sq ft",
    example: "121 sq ft",
  },
  guest_capacity: {
    type: "integer",
    description: "Total capacity of guest in space",
    example: 20,
  },
  cost_per_hour: {
    type: "integer",
    description: "Per hour space amount(cost)",
    example: 100,
  },
  cost_per_day: {
    type: "integer",
    description: "Per day space amount(cost)",
    example: 200,
  },
  user_id: {
    type: "integer",
    description: "User Id of space owner",
    example: 2,
  },
};

const space_meta = {
  type: "object",
  properties: {
    space_id: {
      type: "integer",
      example: 1,
    },
    key: {
      type: "string",
      example: "avalability",
    },
    value: {
      type: "string",
      example:
        '[{"day":"monday","status":"true","start_time":"9:00:AM","close_time":"11:00:PM","date":"2000-02-12"},{"day":"tuesday","status":"true","start_time":"9:00:AM","close_time":"11:00:PM","date":"2000-02-12"}]',
    },
  },
};

const CreateSpace = {
  type: "object",
  properties: {
    ...spacesEntityProperites,
  },
};

const getcreatespace = {
  type: "object",
  properties: {
    ...getSpaceProperties,
  },
};

const getspaces = {};

module.exports = {
  CreateSpace: CreateSpace,
  getcreatespace: getcreatespace,
  spacemeta: space_meta,
};
