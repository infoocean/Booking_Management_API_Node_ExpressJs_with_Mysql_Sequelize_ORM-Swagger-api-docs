module.exports = {
  "/usersignup": {
    post: {
      tags: ["User - Login/Signup"],
      summary: "singup user into the system",
      operationId: "usersignup",
      produces: ["application/json"],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                first_name: {
                  description: "The user first name for signup",
                  required: true,
                  type: "string",
                  example: "Shubham",
                },
                last_name: {
                  description: "The user last name for signup",
                  required: true,
                  type: "string",
                  example: "Jaiwsal",
                },
                email: {
                  description: "The user email for signup",
                  required: true,
                  type: "string",
                  example: "sj2585097@gmail.com",
                },
                phone_number: {
                  description: "The user phone number for signup",
                  required: true,
                  type: "string",
                  example: "7089413024",
                },
                password: {
                  description: "The user password for signup",
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
        201: {
          description: "user signup successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  message: { example: "user signup successfylly!" },
                  first_name: {
                    description: "The user first name for signup",
                    required: true,
                    type: "string",
                    example: "Shubham",
                  },
                  last_name: {
                    description: "The user last name for signup",
                    required: true,
                    type: "string",
                    example: "Jaiwsal",
                  },
                  email: {
                    description: "The user email for signup",
                    required: true,
                    type: "string",
                    example: "sj2585097@gmail.com",
                  },
                  phone_number: {
                    description: "The user phone number for signup",
                    required: true,
                    type: "string",
                    example: "7089413024",
                  },
                  password: {
                    description: "The user phone number for signup",
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
  "/userlogin": {
    post: {
      tags: ["User - Login/Signup"],
      summary: "singin user into the system",
      operationId: "userlogin",
      produces: ["application/json"],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  description: "The user email for login",
                  required: true,
                  type: "string",
                  example: "sj2585097@gmail.com",
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
        200: {
          description: "user login successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "login successfully" },
                  token: {
                    type: "string",
                    description: "Access token",
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlNodWJoYW0iLCJlbWFpbCI6InNqMjU4NTA5N0BnbWFpbC5jb20iLCJyb2xlIjowLCJpYXQiOjE2OTI3MDg5OTIsImV4cCI6MTY5MjczNzc5Mn0.ukuIyJJPDVisFpluum7b9067xP0g4eQgDuSI_t7fui4",
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
