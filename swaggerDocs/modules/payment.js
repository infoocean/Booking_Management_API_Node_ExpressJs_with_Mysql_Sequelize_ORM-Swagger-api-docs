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
                type: "object",
                properties: {
                  success: { example: "true" },
                  paymentlink: {
                    example:
                      "https://checkout.stripe.com/c/pay/cs_test_a15qyjoC4bCOFp7VyysrQ4gAc4R7DDol7dnSbVaaBxDVag603OzticoViU#fidkdWxOYHwnPyd1blpxYHZxWjA0SW5JaVVJU3U2ZmFBdVBtcX1icEZcZ39BV0Bcf2NNYmozS0ZGc013cW1yQzBsakFIdkw0cWM8YXJGNXBRUjR9clY0MmIxSXFRSklKNU1IUDdLc2xLc1w3NTV2ajJvYG9EUycpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/getpaymentdetails": {
    post: {
      tags: ["Payment"],
      summary: "getting payent details",
      operationId: "getpaymentdetails",
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
                type: "object",
                properties: {
                  success: { example: "true" },
                  orderdetails: { example: "object" },
                },
              },
            },
          },
        },
      },
    },
  },
};
