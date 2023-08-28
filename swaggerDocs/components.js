const user = require("./schema/user");
const hotel = require("./schema/hotel");
const room = require("./schema/room");
const automobile = require("./schema/automobile");
const spaces = require("./schema/spaces");
const order = require("./schema/order");
const typeidentifier = require("./schema/typeidentifier");
const transaction = require("./schema/transaction");
module.exports = {
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        in: "header",
      },
    },
    schemas: {
      User: user.User,
      Hotel: hotel.GetHotel,
      Room: room.getRoom,
      Automobile: automobile.addautomobile,
      Spaces: spaces.createSpaces,
      order: order.createHotelOrder,
      typeidentifier: typeidentifier.createTypeidentifier,
      transaction: transaction.createTransaction,
      Error: {
        type: "object",
        properties: {
          httpStatusCode: {
            type: "number",
          },
          errorCode: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
      },
      Delete: {
        type: "object",
        properties: {
          id: {
            type: "number",
          },
          message: {
            type: "string",
          },
        },
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};
