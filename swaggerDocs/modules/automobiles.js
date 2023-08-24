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
          required: false,
          style: "simple",
          explode: false,
          schema: {
            type: "string",
          },
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
          description: "automobile register successfully were obtained",
          content: {
            "application/json": {
              schema: {
                ...automobile.addautomobile,
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
      summary: "list of automobiles",
      operationId: "getautomobiles",
      parameters: [],
      responses: {
        200: {
          description: "Automobile getting successfully",
          content: {
            "application/json": {
              schema: {
                ...automobile.getautomobile,
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
      summary: "get automobile details",
      operationId: "getautomobile",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of event to return",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        200: {
          description: "automobile has been obtained",
          content: {
            "application/json": {
              schema: {
                ...automobile.getautomobile,
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
      summary: "edit automobile details",
      operationId: "editautomobile",
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
        202: {
          description: "automobile has been updated",
          content: {
            "application/json": {
              schema: {
                ...automobile.getautomobile,
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
          name: "id",
          in: "path",
          description: "ID of event to archive",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        202: {
          description: "automobile deleted successfully",
          content: {
            "application/json": {
              schema: {},
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
          description: "getautomobile categories obtained",
          content: {
            "application/json": {
              schema: {
                //$ref:'#/components/schemas/Delete'
              },
            },
          },
        },
      },
    },
  },
};
