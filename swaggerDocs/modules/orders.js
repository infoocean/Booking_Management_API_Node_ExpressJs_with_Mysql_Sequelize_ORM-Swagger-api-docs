const order = require("../schema/order");
module.exports = {
  "/addorder": {
    post: {
      tags: ["Orders"],
      summary: "add hotel order into system",
      operationId: "addorder",
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
          "application/json": {
            schema: {
              ...order.createHotelOrder,
            },
          },
        },
      },
      responses: {
        201: {
          description: "Hotel Order created successfully!",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  message: { example: "order created successfylly!" },
                  order: {
                    ...order.getcreateHotelOrder,
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/addspaceorder": {
    post: {
      tags: ["Orders"],
      summary:
        "add Space order into system ****************** Note - change url endpoint  addspaceorder to addorder",
      operationId: "addspaceorder",
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
          "application/json": {
            schema: {
              type: "object",
              properties: {
                ...order.space_order_EntityProperties,
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Space Order created successfully!",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  message: { example: "order created successfylly!" },
                  order: {
                    type: "object",
                    properties: {
                      ...order.get_space_order_EntityProperties,
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
  "/addautomobileorder": {
    post: {
      tags: ["Orders"],
      summary:
        "add automobile order into system ****************** Note - change url endpoint  addautomobileorder to addorder",
      operationId: "addautomobileorder",
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
          "application/json": {
            schema: {
              type: "object",
              properties: {
                ...order.automobile_order_EntityProperties,
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Space Order created successfully!",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  message: { example: "order created successfylly!" },
                  order: {
                    type: "object",
                    properties: {
                      ...order.get_automobile_order_EntityProperties,
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
  "/getorders": {
    get: {
      tags: ["Orders"],
      summary: "list of all orders",
      operationId: "getorders",
      parameters: [],
      responses: {
        200: {
          description: "getting orders successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  orders: {
                    ...order.getcreateHotelOrder,
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/getorder/{id}": {
    get: {
      tags: ["Orders"],
      summary: "get orders details by order id",
      operationId: "getorder",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of orders to return order details",
          required: true,
          type: "integer",
          format: "int64",
          example: 2,
        },
      ],
      responses: {
        200: {
          description: "getting orders details successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  order: {
                    ...order.get_order_details_properties,
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
