module.exports = {
  "/forgotpassword": {
    post: {
      tags: ["Password - Forgot/Reset/Change"],
      summary: "forgot password into the system",
      operationId: "forgotpassword",
      produces: ["application/json"],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  description: "The user email for forgot password",
                  required: true,
                  type: "string",
                  example: "sj2585097@gmail.com",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "successful",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  message: {
                    example:
                      "forgot password success. use this token for reset password. token expire in 8 hours",
                  },
                  token: {
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
  "/resetpassword": {
    post: {
      tags: ["Password - Forgot/Reset/Change"],
      summary: "reset password from the system",
      operationId: "resetpassword",
      produces: ["application/json"],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                token: {
                  description: "token for reset password",
                  required: true,
                  type: "string",
                  example:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNqMjU4NTA5N0BnbWFpbC5jb20iLCJpZCI6MSwiaWF0IjoxNjkyNjk0MzM5LCJleHAiOjE2OTI3MjMxMzl9.Kx8gDH2qZLBwDDfm5KJXhPfeBKkAXGkReU7F4QvKF5o",
                },
                password: {
                  description: "The user password for login",
                  required: true,
                  type: "string",
                  example: "Shubham#12",
                },
              },
            },
          },
        },
      },
      responses: {
        202: {
          description: "password updated successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: " true" },
                  message: {
                    type: "string",
                    description: "password updated successfully",
                    example: "password updated successfully",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/changepassword": {
    post: {
      tags: ["Password - Forgot/Reset/Change"],
      summary: "change password from the system",
      operationId: "changepassword",
      produces: ["application/json"],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                current_password: {
                  description: "your current password",
                  required: true,
                  type: "string",
                  example: "Shubham#12",
                },
                new_password: {
                  description: "The user new password",
                  required: true,
                  type: "string",
                  example: "Shubham@12",
                },
                confirm_password: {
                  description: "The user confirm password",
                  required: true,
                  type: "string",
                  example: "Shubham@12",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "password changed successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    description: "password changed successfully",
                    example: "password changed successfully",
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
