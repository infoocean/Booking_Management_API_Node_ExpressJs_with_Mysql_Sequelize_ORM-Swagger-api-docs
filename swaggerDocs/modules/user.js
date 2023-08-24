const user = require("../schema/user");
module.exports = {
  "/adduser": {
    post: {
      tags: ["User"],
      summary: "add user into the system",
      operationId: "adduser",
      produces: ["application/json"],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              ...user.CreateUser,
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
                ...user.CreateUser,
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
          description: "list of all users",
          content: {
            "application/json": {
              schema: {
                ...user.User,
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
      summary: "get user details by id",
      operationId: "getuser",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of user to return",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        200: {
          description: "get user details by id",
          content: {
            "application/json": {
              schema: {
                ...user.User,
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
          name: "id",
          in: "path",
          description: "ID of user to return",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        202: {
          description: "delete user by id (soft deleted)",
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
      summary: "update an user details ",
      operationId: "edituser",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of user to update",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              ...user.UpdateUser,
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
          name: "id",
          in: "path",
          description: "ID of user to update",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                image: {
                  description: "The user profile picture",
                  required: true,
                  type: "string",
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
