module.exports = {
  "/addorder": {
    post: {
      tags: ["Orders"],
      summary: "add order",
      operationId: "addorder",
      parameters: [],
      responses: {
        200: {
          description: "Gifts were obtained",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Gift",
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
              schema: {},
            },
          },
        },
      },
    },
  },
  "/getorder/{id}": {
    get: {
      tags: ["Orders"],
      summary: "get orders details",
      operationId: "getorder",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of orders to return",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        200: {
          description: "getting orders details successfully",
          content: {
            "application/json": {
              schema: {},
            },
          },
        },
      },
    },
  },
};
