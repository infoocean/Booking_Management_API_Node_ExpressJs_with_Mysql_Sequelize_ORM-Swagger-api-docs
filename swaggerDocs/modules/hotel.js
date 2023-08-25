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
          required: true,
          style: "simple",
          explode: false,
          schema: {
            type: "string",
          },
          description: "provide login token",
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
        201: {
          description: "Successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  message: { example: "hotel created successfully!" },
                  hotel: {
                    type: "object",
                    properties: {
                      id: { example: 3 },
                      title: { example: "Hotel  Grande Vijay Nagarrt123" },
                      slug: {
                        example: "Hotel_Meritel_Grande_Vijay_Nagar_Indore2",
                      },
                      status: { example: 1 },
                      user_id: { example: 2 },
                    },
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
  "/gethotels/": {
    get: {
      tags: ["Hotel"],
      summary: "get list of all hotels",
      operationId: "gethotels",
      responses: {
        200: {
          description: "getting list of all hotels successfully!",
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
      summary: "get hotel details with associated rooms by hotel id",
      operationId: "gethotel",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of hotel to return",
          required: true,
          type: "integer",
          format: "int64",
          example: 2,
        },
      ],
      responses: {
        200: {
          description: "getting hotels details successfully!",
          content: {
            "application/json": {
              schema: {
                ...hotel.getHotelsDetailswithRooms,
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
      summary: "update the hotel details",
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
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlNodWJoYW0gS3VtYXIiLCJlbWFpbCI6InNqMjU4NTA5N0BnbWFpbC5jb20iLCJyb2xlIjoxLCJpYXQiOjE2OTIyNTE1MDUsImV4cCI6MTY5MjI4MDMwNX0.GVSjlQsh6g0y-jwjf_Cspiokz4IoI9QNdohX7a-6ZI8",
        },
        {
          name: "id",
          in: "path",
          description: "ID of hotel to update",
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
              ...hotel.CreateHotel,
            },
          },
        },
      },
      responses: {
        200: {
          description: "hotel updated successfully!",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  message: { example: "hotel updated successfully!" },
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
  "/deletehotel/{id}/": {
    delete: {
      tags: ["Hotel"],
      summary: "delete the hotel (soft deleted)",
      operationId: "deletehotel",
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
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlNodWJoYW0gS3VtYXIiLCJlbWFpbCI6InNqMjU4NTA5N0BnbWFpbC5jb20iLCJyb2xlIjoxLCJpYXQiOjE2OTIyNTE1MDUsImV4cCI6MTY5MjI4MDMwNX0.GVSjlQsh6g0y-jwjf_Cspiokz4IoI9QNdohX7a-6ZI8",
        },
        {
          name: "id",
          in: "path",
          description: "ID of hotel to delete",
          required: true,
          type: "integer",
          format: "int64",
          example: 2,
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
                    example: "hotel deleted successfully!",
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
          description: "ID of hotel to get details",
          required: true,
          type: "integer",
          format: "int64",
          example: 2,
        },
      ],
      responses: {
        200: {
          description: "getting hotel details successfully",
          content: {
            "application/json": {
              schema: {
                ...hotel.getHotelsDetails,
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
          description: "getting hotel categories successfully!",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  hotelCategories: {
                    type: "object",
                    properties: {
                      id: { example: 1 },
                      name: { example: "Boutique hotel" },
                      slug: { example: "boutique_hotel" },
                      type_identifier_id: { example: 1 },
                    },
                  },
                },
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
          description: "getting hotel amenities successfully!",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  hotelAmenities: {
                    type: "object",
                    properties: {
                      id: { example: 1 },
                      name: { example: "WiFi" },
                      slug: { example: "Wi_Fi" },
                      type_identifier_id: { example: 2 },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
