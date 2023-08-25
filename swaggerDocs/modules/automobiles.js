const automobile = require("../schema/automobile");
module.exports = {
  "/addautomobile": {
    post: {
      tags: ["Automobile"],
      summary: "add automobile into syatem",
      operationId: "addautomobile",
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
          "multipart/form-data": {
            schema: {
              ...automobile.addautomobile,
            },
          },
        },
      },
      responses: {
        201: {
          description: "automobile register successfully!",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  message: { example: "auto mobile  created successfylly!" },
                  automobile: {
                    ...automobile.getcreatetimeautomobile,
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/getautomobiles": {
    get: {
      tags: ["Automobile"],
      summary: "list of all automobiles",
      operationId: "getautomobiles",
      parameters: [],
      responses: {
        200: {
          description: "Automobile getting successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  automobile: {
                    ...automobile.getautomobile,
                  },
                  auto_mobile_meta: {
                    type: "object",
                    properties: {
                      ...automobile.automobile_meta,
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
  "/getautomobile/{id}": {
    get: {
      tags: ["Automobile"],
      summary: "get automobile details by id",
      operationId: "getautomobile",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of return to automobile details",
          required: true,
          type: "integer",
          format: "int64",
          example: 2,
        },
      ],
      responses: {
        200: {
          description: "automobile details getting succcessfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  automibiles: {
                    ...automobile.getcreatetimeautomobile,
                  },
                  auto_mobile_meta: {
                    type: "object",
                    properties: {
                      ...automobile.automobile_meta,
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
  "/editautomobile/{id}": {
    put: {
      tags: ["Automobile"],
      summary: "edit automobile details by id",
      operationId: "editautomobile",
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
          description: "ID of update to automobile details",
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
              ...automobile.addautomobile,
            },
          },
        },
      },
      responses: {
        202: {
          description: "automobile has been updated successfully!",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  message: { example: "automobile updated successfully!" },
                },
              },
            },
          },
        },
      },
    },
  },
  "/deleteautomobile/{id}": {
    delete: {
      tags: ["Automobile"],
      summary: "delete automobile (soft deleted)",
      operationId: "deleteautomobile",
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
          description: "ID of automobile to delete",
          required: true,
          type: "integer",
          format: "int64",
          example: 2,
        },
      ],
      responses: {
        202: {
          description: "automobile deleted successfully!",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  message: { example: "Auto Mobile deleted successfully" },
                },
              },
            },
          },
        },
      },
    },
  },
  "/getautomobilecategories": {
    get: {
      tags: ["Automobile"],
      summary: "list of automobile categories",
      operationId: "getautomobilecategories",
      parameters: [],
      responses: {
        200: {
          description: "get list of automobile categories",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  automobilecategories: {
                    type: "object",
                    properties: {
                      id: { example: 1 },
                      name: { example: "car" },
                      slug: { example: "car" },
                      type_identifier_id: { example: 5 },
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
};
