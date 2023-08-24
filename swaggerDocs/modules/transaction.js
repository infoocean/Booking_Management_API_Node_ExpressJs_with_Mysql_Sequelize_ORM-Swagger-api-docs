module.exports = {
  "/addtransaction": {
    post: {
      tags: ["Transaction"],
      summary: "add transaction",
      operationId: "addtransaction",
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
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IlNodWJoYW0gQmhhaSIsImVtYWlsIjoic2o4NDY0NzM2QGdtYWlsLmNvbSIsInJvbGUiOjIsImlhdCI6MTY5MTQ2OTE0MywiZXhwIjoxNjkxNDk3OTQzfQ.pc9pLzB5nPOKxmdX_Sf5V_n5xNLRbU31K9nRktki3vw",
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                order_id: 2,
                amount: 200,
                txn_id: "bvgfhngfhnjgf",
                payment_method: "stripe",
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "transaction added succesfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  order_id: 2,
                  amount: 200,
                  txn_id: "bvgfhngfhnjgf",
                  payment_method: "stripe",
                },
              },
            },
          },
        },
      },
    },
  },
  "/gettransactions": {
    get: {
      tags: ["Transaction"],
      summary: "List of all transactions",
      operationId: "gettransactions",
      responses: {
        200: {
          description: "transactions getting successfully ",
          content: {
            "application/json": {
              schema: {
                //$ref: "#/components/schemas/Receiver",
              },
            },
          },
        },
      },
    },
  },
  "/gettransaction/{id}": {
    get: {
      tags: ["Transaction"],
      summary: "get transaction details by id",
      operationId: "gettransaction",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of transactions to return",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        200: {
          description: "transaction details getting succesfully",
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
