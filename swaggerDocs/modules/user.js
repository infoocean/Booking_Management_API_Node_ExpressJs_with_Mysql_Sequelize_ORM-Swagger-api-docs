const user = require("../schema/user");
module.exports = {
  "/adduser": {
    post: {
      tags: ["User"],
      summary: "add user into the system",
      operationId: "adduser",
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
      produces: ["application/json"],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              ...user.createUser,
            },
          },
        },
      },
      responses: {
        201: {
          description: "user registration successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  message: { example: "user created successfylly!" },
                  user: {
                    ...user.createUser,
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/getusers": {
    get: {
      tags: ["User"],
      summary: "list of all users",
      operationId: "getusers",
      responses: {
        200: {
          description: "users getting successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  users: {
                    ...user.getUsers,
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/getuser/{id}": {
    get: {
      tags: ["User"],
      summary: "get user details by user id",
      operationId: "getuser",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of user to return",
          required: true,
          type: "integer",
          format: "int64",
          example: 2,
        },
      ],
      responses: {
        200: {
          description: "userdetails getting successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  user: {
                    ...user.getUsers,
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/deleteuser/{id}": {
    delete: {
      tags: ["User"],
      summary: "delete user by id (soft deleted)",
      operationId: "deleteuser",
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
        {
          name: "id",
          in: "path",
          description: "ID of user to delete",
          required: true,
          type: "integer",
          format: "int64",
          example: 2,
        },
      ],
      responses: {
        202: {
          description: "user deleted successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  message: {
                    example: "user deleted successfully",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/edituser/{id}": {
    put: {
      tags: ["User"],
      summary: "update an user details",
      operationId: "edituser",
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
        {
          name: "id",
          in: "path",
          description: "ID of user to update",
          required: true,
          type: "integer",
          format: "int64",
          example: 2,
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              ...user.createUser,
            },
          },
        },
      },
      responses: {
        202: {
          description: "User has been updated",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  message: {
                    example: "user updated successfully",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/edituserprofilepicture/{id}": {
    put: {
      tags: ["User"],
      summary: "update an user profile picture",
      operationId: "edituserprofilepicture",
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
        {
          name: "id",
          in: "path",
          description: "ID of user to update profile picture",
          required: true,
          type: "integer",
          format: "int64",
          example: 2,
        },
      ],
      requestBody: {
        content: {
          "multipart/form-data": {
            schema: {
              type: "object",
              properties: {
                image: {
                  description: "The user profile picture",
                  required: true,
                  type: "string",
                  format: "binary",
                  example: "/home/shubham/Downloads/google.svg",
                },
              },
            },
          },
        },
      },
      responses: {
        202: {
          description: "User profile picture has been updated",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  message: {
                    example:
                      "user profile picture has been updated successfully",
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
