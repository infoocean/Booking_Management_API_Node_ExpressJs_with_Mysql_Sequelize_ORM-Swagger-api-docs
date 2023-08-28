const transaction = require("../schema/transaction");
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
          required: true,
          style: "simple",
          explode: false,
          schema: {
            type: "string",
          },
          description: "provide login token",
          example:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IlNodWJoYW0gQmhhaSIsImVtYWlsIjoic2o4NDY0NzM2QGdtYWlsLmNvbSIsInJvbGUiOjIsImlhdCI6MTY5MTQ2OTE0MywiZXhwIjoxNjkxNDk3OTQzfQ.pc9pLzB5nPOKxmdX_Sf5V_n5xNLRbU31K9nRktki3vw",
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              ...transaction.createTransaction,
            },
          },
        },
      },
      responses: {
        201: {
          description: "transaction created succesfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  message: { example: "transaction created successfylly!" },
                  transaction: {
                    ...transaction.getcreatetxn,
                  },
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
      summary: "list of all transactions",
      operationId: "gettransactions",
      responses: {
        200: {
          description: "transactions getting successfully ",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  Transaction: {
                    ...transaction.getcreatetxn,
                  },
                },
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
          description: "ID of transactions to return transaction details",
          required: true,
          type: "integer",
          format: "int64",
          example: 1,
        },
      ],
      responses: {
        200: {
          description: "transaction details getting succesfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  Transaction: {
                    ...transaction.getcreatetxn,
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
