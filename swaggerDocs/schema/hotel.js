const room = require("../schema/room");
const defaultProperties = {
  id: {
    type: "integer",
    description: "identification number",
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
    description: "Brief information of hotel",
    example:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum.",
  },
  long_description: {
    type: "string",
    description: "More infoemation of hotel",
    example:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.",
  },
  availability: {
    type: "string",
    description:
      "Hotel availabality : Availablity means which day of hotel is open or close with timing",
    example: `[{"day":"monday","status":"true","start_time":"9:00:AM","close_time":"11:00:PM"},{"day":"tuesday","status":"true","start_time":"9:00:AM","close_time":"11:00:PM"]`,
  },
  status: {
    type: "integer",
    description:
      "Hotel status active or inactive 0 means inactive or 1 means active",
    example: 1,
  },
  user_id: {
    type: "integer",
    description: "User id describes hotel owner details",
    example: 2,
  },
  image: {
    type: "string",
    description: "Hotel single image",
    format: "binary",
  },
  gallary_image: {
    type: "string",
    description: "Hotel gallary images",
    format: "binary",
  },
  location: {
    type: "string",
    description: "Hotel location : which location hotel is associated",
    example: `{"latitude":"22.719568","longitude":"75.857727"}`,
  },
  city: {
    type: "string",
    description: "Hotel city name : which city hotel is associated",
    example: "indore",
  },
  booking_type: {
    type: "string",
    description:
      "Hotel booking types : which types of bookings is available on this hotel",
    example:
      '{"is_hourly_booking":true, "is_day_boking":true,"is_monthly_booking":true}',
  },
  cancellation_pilicy: {
    type: "string",
    description: "Hotel calcellation policy",
    example:
      '["Contrary to popular belief, Lorem Ipsum is not simply random text.", "Contrary to popular belief, Lorem Ipsum is not simply random text.", "Contrary to popular belief, Lorem Ipsum is not simply random text."]',
  },
  terms_condition: {
    type: "string",
    description: "Hotel terms & condition",
    example:
      '["Contrary to popular belief, Lorem Ipsum is not simply random text.", "Contrary to popular belief, Lorem Ipsum is not simply random text.", "Contrary to popular belief, Lorem Ipsum is not simply random text."]',
  },
};
const hotel_meta_entity_properties = {
  key: {
    type: "string",
    example: "terms_condition",
  },
  value: {
    example:
      '["Contrary to popular belief, Lorem Ipsum is not simply random text.", "Contrary to popular belief, Lorem Ipsum is not simply random text.", "Contrary to popular belief, Lorem Ipsum is not simply random text."]',
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
    success: { example: "true" },
    hotels: {
      type: "object",
      properties: {
        ...defaultProperties,
        title: { example: "Hotel  Grande Vijay Nagarrt123" },
        slug: {
          example: "Hotel_Meritel_Grande_Vijay_Nagar_Indore2",
        },
        status: { example: 1 },
        user_id: { example: 2 },
        hotels_meta: {
          type: "object",
          properties: { ...hotel_meta_entity_properties },
        },
      },
    },
  },
};

const getHotelsDetailswithRooms = {
  type: "object",
  properties: {
    success: { example: "true" },
    hotels: {
      type: "object",
      properties: {
        ...defaultProperties,
        title: { example: "Hotel  Grande Vijay Nagarrt123" },
        slug: {
          example: "Hotel_Meritel_Grande_Vijay_Nagar_Indore2",
        },
        status: { example: 1 },
        user_id: { example: 2 },
        hotels_meta: {
          type: "object",
          properties: { ...hotel_meta_entity_properties },
        },
        hotels_rooms: { ...room.getRoom },
      },
    },
  },
};

const getHotelsDetails = {
  type: "object",
  properties: {
    success: { example: "true" },
    hotels: {
      type: "object",
      properties: {
        ...defaultProperties,
        title: { example: "Hotel  Grande Vijay Nagarrt123" },
        slug: {
          example: "Hotel_Meritel_Grande_Vijay_Nagar_Indore2",
        },
        status: { example: 1 },
        user_id: { example: 2 },
        hotels_meta: {
          type: "object",
          properties: { ...hotel_meta_entity_properties },
        },
      },
    },
  },
};

module.exports = {
  GetHotel: getHotels,
  CreateHotel: createHotel,
  getHotelsDetailswithRooms: getHotelsDetailswithRooms,
  getHotelsDetails: getHotelsDetails,
};
