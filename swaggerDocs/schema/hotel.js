const defaultProperties = {
  id: {
    type: "integer",
    description: "identification number for uniquely identify each data",
    example: 1,
  },
};
const HotelEntityProperties = {
  title: {
    type: "string",
    description: "Hotel name",
    example: "Radisson Blu Hotel Indore",
  },
  slug: {
    type: "string",
    description: "Hotel slug",
    example: "Radisson_Blu_Hotel_Indore",
  },
  short_description: {
    type: "string",
    description: "Berief information of hotel",
    example:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
  },
  long_description: {
    type: "string",
    description: "More infoemation of hotel ",
    example:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
  },
  availability: {
    type: "string",
    description: "Hotel availibality",
    example: `[{"day":"monday","status":"true","start_time":"9:00:AM","close_time":"11:00:PM","date":"2000-02-12"},{"day":"tuesday","status":"true","start_time":"9:00:AM","close_time":"11:00:PM","date":"2000-02-12"}]`,
  },
  status: {
    type: "integer",
    description:
      "hotel status active or inactive 0 mean inactive or 1 mean active",
    example: 0,
  },
  user_id: {
    type: "integer",
    description: "user id contain of hotel owner information",
    example: 2,
  },
  image: {
    type: "string",
    description: "hotel single image",
    format: "binary",
  },
  gallary_image: {
    type: "string",
    description: "hotel gallary images",
    format: "binary",
  },
  location: {
    type: "string",
    description: "hotel location",
    example: `{"latitude":"22.719568","longitude":"75.857727"}`,
  },
  city: {
    type: "string",
    description: "city name of hotel",
    example: "indore",
  },
  booking_type: {
    type: "string",
    description: "booking types of hotel",
    example:
      '{"is_hourly_booking":true, "is_day_boking":true,"is_monthly_booking":true}',
  },
  cancellation_pilicy: {
    type: "string",
    description: "hotel calcellation policy",
    example: '["Ani", "Sam", "Joe"]',
  },
  terms_condition: {
    type: "string",
    description: "hotel terms & condition",
    example: '["Ani", "Sam", "Joe"]',
  },
};

const createHotel = {
  type: "object",
  properties: {
    ...HotelEntityProperties,
  },
};

const getHotels = {
  type: "object",
  properties: {
    ...defaultProperties,
    ...HotelEntityProperties,
  },
};

const updateHotels = {
  type: "object",
  properties: {
    ...HotelEntityProperties,
  },
};

module.exports = {
  GetHotel: getHotels,
  CreateHotel: createHotel,
  UpdateHotel: updateHotels,
};
