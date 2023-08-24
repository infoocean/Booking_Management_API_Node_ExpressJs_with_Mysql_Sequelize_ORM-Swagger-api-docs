module.exports = {
  "/acceptpayment": {
    post: {
      tags: ["Payment"],
      summary: "accept stripe payment ",
      operationId: "acceptpayment",
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
                product_items: [
                  {
                    item_name: "T-shirt",
                    amount: 2000,
                    quantity: 1,
                  },
                ],
                success_page_url:
                  "http://mangoit-lms.mangoitsol.com/paymentsuccess",
                cancel_page_url:
                  "http://mangoit-lms.mangoitsol.com/paymentcancel",
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "thankyou payment success",
          content: {
            "application/json": {
              schema: {
                //$ref: "#/components/schemas/Thankyou",
              },
            },
          },
        },
      },
    },
  },
  "/getpaymentdetails": {
    get: {
      tags: ["Payment"],
      summary: "getting payent details",
      operationId: "getpaymentdetails",
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
              properties: {
                cs_test_key: {
                  type: "string",
                  example:
                    "cs_test_a1Y6XrChxKCsWk9gOet6TFUseERGE43eu08ZDq2aZysXJfpf8xuFQpXCMH",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Thankyou getting payent details",
          content: {
            "application/json": {
              schema: {
                //$ref: "#/components/schemas/Delete",
              },
            },
          },
        },
      },
    },
  },
};
