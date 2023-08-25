const room = require("../schema/room");
module.exports = {
  "/addroom": {
    post: {
      tags: ["Room"],
      summary: "add room into system",
      parameters: [
        {
          name: "x-access-token",
          in: "header",
          required: true,
          style: "simple",
          explode: false,
          schema: {
            type: "string",
          },
          description: "provide login token",
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
        201: {
          description: "room created successfully!",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  message: { example: "room created successfully" },
                  room: {
                    ...room.createRoom,
                  },
                },
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
      summary: "get list of all rooms",
      operationId: "getrooms",
      responses: {
        200: {
          description: "getting rooms successfully!",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  rooms: {
                    ...room.getRoom,
                  },
                },
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
          example: 1,
        },
      ],
      responses: {
        200: {
          description: "getting room details successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  room: {
                    ...room.getRoom,
                  },
                },
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
      summary: "get all rooms by hotel id",
      operationId: "getroomesbyhotelid",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of hotel to return all rooms",
          required: true,
          type: "integer",
          format: "int64",
          example: 2,
        },
      ],
      responses: {
        200: {
          description: "rooms getting successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  rooms: {
                    ...room.getRoom,
                  },
                },
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
      summary: "update room details",
      operationId: "editroom",
      parameters: [
        {
          name: "x-access-token",
          in: "header",
          required: true,
          style: "simple",
          explode: false,
          schema: {
            type: "string",
          },
          description: "provide login token",
          example:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlNodWJoYW0gS3VtYXIiLCJlbWFpbCI6InNqMjU4NTA5N0BnbWFpbC5jb20iLCJyb2xlIjoxLCJpYXQiOjE2OTIzNDU2MzQsImV4cCI6MTY5MjM3NDQzNH0.RQdSk-OmCvHqU2aKHyBgauUOndcvBKNxX6F7BwfdYpw",
        },
        {
          name: "id",
          in: "path",
          description: "ID of room to update room details",
          required: true,
          type: "integer",
          format: "int64",
          example: 2,
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
        202: {
          description: "room updated successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  succes: { example: "true" },
                  message: { example: "room updated successfully" },
                },
              },
            },
          },
        },
      },
    },
  },
};
