module.exports = {
  "/addrole": {
    post: {
      tags: ["Role"],
      summary: "add role into system",
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
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: {
                  description: "The name of role",
                  required: true,
                  type: "string",
                  example: "Shubham",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "role created succesfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  message: { example: "role created successfylly!" },
                  role: {
                    type: "object",
                    properties: {
                      id: {
                        example: 1,
                      },
                      name: {
                        example: "admin",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/getroles": {
    get: {
      tags: ["Role"],
      summary: "get list of all roles",
      responses: {
        200: {
          description: "successful getting roles",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  roles: {
                    type: "object",
                    properties: {
                      id: {
                        example: 1,
                      },
                      name: {
                        example: "admin",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/editrole/{id}": {
    put: {
      tags: ["Role"],
      summary: "edit role into system",
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
          description: "ID of role to update",
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
              type: "object",
              properties: {
                name: {
                  description: "The name of role",
                  required: true,
                  type: "string",
                  example: "Shubham",
                },
              },
            },
          },
        },
      },
      responses: {
        202: {
          description: "role updated succesfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  message: { example: "role updated successfylly!" },
                },
              },
            },
          },
        },
      },
    },
  },
};
