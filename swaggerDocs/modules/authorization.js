module.exports = {
  "/getauthorizationtoken": {
    get: {
      tags: ["Get Authorization Token"],
      summary: "get token for api authorization",
      responses: {
        200: {
          description: "successful getting authorization token",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: {
                    description: "for api success execute",
                    required: true,
                    type: "string",
                    example: "true",
                  },
                  message: {
                    description: "message for api getting responce",
                    required: true,
                    type: "string",
                    example: "ok",
                  },
                  token: {
                    description: "getting authorization token",
                    required: true,
                    type: "string",
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNqMjU4NTA5N0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IlYhdkVrQDMyMUAxMjMiLCJpYXQiOjE2OTI2ODU5NDEsImV4cCI6MTY5MjcyOTE0MX0.I5_QzYwzSCLpNZ1qZBN9srQoa8Wbh8Uh01h_zgP5_V8",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/": {
    tags: ["Check Server"],
    summary: "check server is running or not",
    operationId: "/",
    responses: {
      200: {
        description: "Successful response",
        content: {
          "application/json": {},
        },
      },
    },
  },
};
