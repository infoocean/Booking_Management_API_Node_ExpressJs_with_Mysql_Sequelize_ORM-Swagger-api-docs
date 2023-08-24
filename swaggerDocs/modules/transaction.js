module.exports = {
  "/receiver": {
    get: {
      tags: ["Transaction"],
      summary: "List receiver",
      operationId: "getReceivers",
      parameters: [],
      responses: {
        200: {
          description: "Receivers were obtained",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Receiver",
              },
            },
          },
        },
      },
    },
  },
  "/receiver/{id}": {
    get: {
      tags: ["Transaction"],
      summary: "List receiver by id",
      operationId: "getReceiver",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of receiver to return",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        200: {
          description: "Receiver were obtained",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Receiver",
              },
            },
          },
        },
      },
    },
  },
};
