const spaces = require("../schema/spaces");

module.exports = {
  "/addspace": {
    post: {
      tags: ["Spaces"],
      summary: "add space into system",
      operationId: "addspace",
      parameters: [
        {
          name: "x-access-token",
          in: "header",
          required: false,
          style: "simple",
          explode: false,
          schema: {
            type: "number",
          },
          example:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlNodWJoYW0gS3VtYXIiLCJlbWFpbCI6InNqMjU4NTA5N0BnbWFpbC5jb20iLCJyb2xlIjoxLCJpYXQiOjE2OTIyNzcwODMsImV4cCI6MTY5MjMwNTg4M30.5EBfPrcrg7kbT3sMlNZZRFOHtOBLKdH6vwjeTN7nICE",
        },
      ],
      requestBody: {
        content: {
          "multipart/form-data": {
            schema: {
              ...spaces.createSpaces,
            },
          },
        },
      },
      responses: {
        200: {
          description: "Successful response",
          content: {
            "application/json": {
              schema: {
                ...spaces.createSpaces,
              },
            },
          },
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
    },
  },
  "/getspaces": {
    get: {
      tags: ["Spaces"],
      summary: "get list of all spaces",
      operationId: "getspaces",
      responses: {
        200: {
          description: "spaces getting successfully",
          content: {
            "application/json": {
              schema: {
                ...spaces.createSpaces,
              },
            },
          },
        },
      },
    },
  },
  "/getspace/{id}": {
    get: {
      tags: ["Spaces"],
      summary: "get spaces details",
      operationId: "getspace",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of space to return",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        200: {
          description: "space details getting successfully",
          content: {
            "application/json": {
              schema: {
                ...spaces.createSpaces,
              },
            },
          },
        },
      },
    },
  },
  "/editspace/{id}": {
    put: {
      tags: ["Spaces"],
      summary: "edit spaces details",
      operationId: "editspace",
      parameters: [
        {
          name: "x-access-token",
          in: "header",
          required: false,
          style: "simple",
          explode: false,
          schema: {
            type: "number",
          },
          example:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlNodWJoYW0gS3VtYXIiLCJlbWFpbCI6InNqMjU4NTA5N0BnbWFpbC5jb20iLCJyb2xlIjoxLCJpYXQiOjE2OTIyNzcwODMsImV4cCI6MTY5MjMwNTg4M30.5EBfPrcrg7kbT3sMlNZZRFOHtOBLKdH6vwjeTN7nICE",
        },
      ],
      requestBody: {
        content: {
          "multipart/form-data": {
            schema: {
              ...spaces.createSpaces,
            },
          },
        },
      },
    },
  },
  "/deletespace/{id}": {
    delete: {
      tags: ["Spaces"],
      summary: "delete spaces (soft deleted)",
      operationId: "deletespace",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of space to return",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        200: {
          description: "space deleted successfully",
          content: {
            "application/json": {
              schema: {
                //...spaces.createSpaces,
              },
            },
          },
        },
      },
    },
  },
  "/getspacescategories": {
    get: {
      tags: ["Spaces"],
      summary: "get spaces categories",
      parameters: [
        {
          name: "type_identifier_id",
          in: "query",
          required: false,
          style: "form",
          explode: true,
          description: "optional",
          schema: {
            type: "integer",
          },
          example: "3",
        },
      ],
      responses: {
        200: {
          description: "Successfuly getting space categories",
          content: {
            "application/json": {
              schema: {},
            },
          },
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
    },
  },
  "/getspacesamenities": {
    get: {
      tags: ["Spaces"],
      summary: "get spaces amenities",
      operationId: "getspacesamenities",
      responses: {
        200: {
          description: "spaces amenities getting successfully",
          content: {
            "application/json": {
              schema: {
                //..spaces.createSpaces,
              },
            },
          },
        },
      },
    },
  },
};
