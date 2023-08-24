const room = require("../schema/room");
module.exports = {
  "/addroom": {
    post: {
      tags: ["Room"],
      summary: "addroom",
      parameters: [
        {
          name: "x-access-token",
          in: "header",
          required: false,
          style: "simple",
          explode: false,
          schema: {
            type: "string",
          },
          example:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlNodWJoYW0gS3VtYXIiLCJlbWFpbCI6InNqMjU4NTA5N0BnbWFpbC5jb20iLCJyb2xlIjoxLCJpYXQiOjE2OTIzNDU2MzQsImV4cCI6MTY5MjM3NDQzNH0.RQdSk-OmCvHqU2aKHyBgauUOndcvBKNxX6F7BwfdYpw",
        },
      ],
      requestBody: {
        content: {
          "multipart/form-data": {
            schema: {
              ...room.createRoom,
            },
          },
        },
      },
      responses: {
        200: {
          description: "Successful response",
          content: {
            "application/json": {
              schema: {
                ...room.createRoom,
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
    },
  },
  "/getrooms": {
    get: {
      tags: ["Room"],
      summary: "list of all rooms",
      operationId: "getrooms",
      responses: {
        200: {
          description: "rooms has been obtained",
          content: {
            "application/json": {
              schema: {
                ...room.getRoom,
              },
            },
          },
        },
      },
    },
  },
  "/getroom/{id}": {
    get: {
      tags: ["Room"],
      summary: "get room details by room id",
      operationId: "getroom",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of room to return room details",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        200: {
          description: "Account has been created",
          content: {
            "application/json": {
              schema: {
                ...room.getRoom,
              },
            },
          },
        },
      },
    },
  },
  "/getroomesbyhotelid/{id}/": {
    get: {
      tags: ["Room"],
      summary: "get all rooms by hotel id associated from hotel id",
      operationId: "getroomesbyhotelid",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of hotel to return rooms",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        200: {
          description: "rooms has been obtained",
          content: {
            "application/json": {
              schema: {
                ...room.getRoom,
              },
            },
          },
        },
      },
    },
  },
  "/editroom/{id}/": {
    put: {
      tags: ["Room"],
      summary: "update a room",
      operationId: "editroom",
      parameters: [
        {
          name: "x-access-token",
          in: "header",
          required: false,
          style: "simple",
          explode: false,
          schema: {
            type: "string",
          },
          example:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlNodWJoYW0gS3VtYXIiLCJlbWFpbCI6InNqMjU4NTA5N0BnbWFpbC5jb20iLCJyb2xlIjoxLCJpYXQiOjE2OTIzNDU2MzQsImV4cCI6MTY5MjM3NDQzNH0.RQdSk-OmCvHqU2aKHyBgauUOndcvBKNxX6F7BwfdYpw",
        },
      ],
      requestBody: {
        content: {
          "multipart/form-data": {
            schema: {
              ...room.createRoom,
            },
          },
        },
      },
      responses: {
        200: {
          description: "room has been updated",
          content: {
            "application/json": {
              schema: {
                ...room.getRoom,
              },
            },
          },
        },
      },
    },
  },
};
