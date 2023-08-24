const hotel = require("../schema/hotel");
module.exports = {
  "/addhotel": {
    post: {
      tags: ["Hotel"],
      summary: "add hotel into system",
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
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlNodWJoYW0gS3VtYXIiLCJlbWFpbCI6InNqMjU4NTA5N0BnbWFpbC5jb20iLCJyb2xlIjoxLCJpYXQiOjE2OTIyNTE1MDUsImV4cCI6MTY5MjI4MDMwNX0.GVSjlQsh6g0y-jwjf_Cspiokz4IoI9QNdohX7a-6ZI8",
        },
      ],
      requestBody: {
        content: {
          "multipart/form-data": {
            schema: {
              ...hotel.CreateHotel,
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
                ...hotel.GetHotel,
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
  "/gethotels/": {
    get: {
      tags: ["Hotel"],
      summary: "get list of all hotels",
      operationId: "gethotels",
      responses: {
        200: {
          description: "list of all hotels",
          content: {
            "application/json": {
              schema: {
                ...hotel.GetHotel,
              },
            },
          },
        },
      },
    },
  },
  "/gethotel/{id}": {
    get: {
      tags: ["Hotel"],
      summary: "get hotel details with rooms by hotel id",
      operationId: "gethotel",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of hotel to return",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        200: {
          description: "get hotel details with rooms",
          content: {
            "application/json": {
              schema: {
                ...hotel.GetHotel,
              },
            },
          },
        },
      },
    },
  },
  "/edithotel/{id}/": {
    put: {
      tags: ["Hotel"],
      summary: "Update the Hotel details",
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
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlNodWJoYW0gS3VtYXIiLCJlbWFpbCI6InNqMjU4NTA5N0BnbWFpbC5jb20iLCJyb2xlIjoxLCJpYXQiOjE2OTIyNTE1MDUsImV4cCI6MTY5MjI4MDMwNX0.GVSjlQsh6g0y-jwjf_Cspiokz4IoI9QNdohX7a-6ZI8",
        },
      ],
      requestBody: {
        content: {
          "multipart/form-data": {
            schema: {
              ...hotel.UpdateHotel,
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
                ...hotel.GetHotel,
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
  "/deletehotel/{id}/": {
    delete: {
      tags: ["Hotel"],
      summary: "delete the hotel (soft deleted)",
      operationId: "deletehotel",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of hotel to delete",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        200: {
          description: "hotel has been updated",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: {
                    example: "true",
                  },
                  message: {
                    example: "hotel deleted successfully",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/gethoteldetails/{id}/": {
    get: {
      tags: ["Hotel"],
      summary: "get hotels details by hotel id",
      operationId: "gethoteldetails",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of hotel to delete",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        200: {
          description: "hotel obtained",
          content: {
            "application/json": {
              schema: {
                ...hotel.GetHotel,
              },
            },
          },
        },
      },
    },
  },
  "/gethotelcategories": {
    get: {
      tags: ["Hotel"],
      summary: "get hotels categories",
      operationId: "gethotelcategories",
      responses: {
        200: {
          description: "categories obtained",
          content: {
            "application/json": {
              schema: {
                //...hotel.GetHotel,
              },
            },
          },
        },
      },
    },
  },
  "/gethotelamenities": {
    get: {
      tags: ["Hotel"],
      summary: "get hotels amenities",
      operationId: "gethotelamenities",
      responses: {
        200: {
          description: "hotel amenities obtained",
          content: {
            "application/json": {
              schema: {
               // ...hotel.GetHotel,
              },
            },
          },
        },
      },
    },
  },
};
