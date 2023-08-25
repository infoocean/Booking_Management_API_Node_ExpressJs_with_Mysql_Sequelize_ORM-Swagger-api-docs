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
          required: true,
          style: "simple",
          explode: false,
          schema: {
            type: "string",
          },
          description: "provide login token",
          example:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlNodWJoYW0gS3VtYXIiLCJlbWFpbCI6InNqMjU4NTA5N0BnbWFpbC5jb20iLCJyb2xlIjoxLCJpYXQiOjE2OTIyNzcwODMsImV4cCI6MTY5MjMwNTg4M30.5EBfPrcrg7kbT3sMlNZZRFOHtOBLKdH6vwjeTN7nICE",
        },
      ],
      requestBody: {
        content: {
          "multipart/form-data": {
            schema: {
              ...spaces.CreateSpace,
            },
          },
        },
      },
      responses: {
        201: {
          description: "space created successfully!",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  message: { example: "space created successfylly!" },
                  space: {
                    ...spaces.getcreatespace,
                  },
                },
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
                type: "object",
                properties: {
                  success: { example: "true" },
                  spaces: {
                    ...spaces.getcreatespace,
                  },
                  space_meta: {
                    ...spaces.spacemeta,
                  },
                },
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
      summary: "get spaces details by space id",
      operationId: "getspace",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of space to return space details",
          required: true,
          type: "integer",
          format: "int64",
          example: 1,
        },
      ],
      responses: {
        200: {
          description: "space details getting successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  spaces: {
                    ...spaces.getcreatespace,
                  },
                  space_meta: {
                    ...spaces.spacemeta,
                  },
                },
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
      summary: "edit space details",
      operationId: "editspace",
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
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlNodWJoYW0gS3VtYXIiLCJlbWFpbCI6InNqMjU4NTA5N0BnbWFpbC5jb20iLCJyb2xlIjoxLCJpYXQiOjE2OTIyNzcwODMsImV4cCI6MTY5MjMwNTg4M30.5EBfPrcrg7kbT3sMlNZZRFOHtOBLKdH6vwjeTN7nICE",
        },
        {
          name: "id",
          in: "path",
          description: "ID of space to update space details",
          required: true,
          type: "integer",
          format: "int64",
          example: 1,
        },
      ],
      requestBody: {
        content: {
          "multipart/form-data": {
            schema: {
              ...spaces.CreateSpace,
            },
          },
        },
      },
      responses: {
        202: {
          description: "space updated successfully!",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  succes: { example: "true" },
                  message: { example: "space updated successfully" },
                },
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
  "/deletespace/{id}": {
    delete: {
      tags: ["Spaces"],
      summary: "delete spaces (soft deleted)",
      operationId: "deletespace",
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
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlNodWJoYW0gS3VtYXIiLCJlbWFpbCI6InNqMjU4NTA5N0BnbWFpbC5jb20iLCJyb2xlIjoxLCJpYXQiOjE2OTIyNzcwODMsImV4cCI6MTY5MjMwNTg4M30.5EBfPrcrg7kbT3sMlNZZRFOHtOBLKdH6vwjeTN7nICE",
        },
        {
          name: "id",
          in: "path",
          description: "ID of space to delete space",
          required: true,
          type: "integer",
          format: "int64",
          example: 1,
        },
      ],
      responses: {
        202: {
          description: "space deleted successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  succes: { example: "true" },
                  message: { example: "space deleted successfully" },
                },
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
        // {
        //   name: "type_identifier_id",
        //   in: "query",
        //   required: false,
        //   style: "form",
        //   explode: true,
        //   description: "Optional",
        //   schema: {
        //     type: "integer",
        //   },
        //   example: "3",
        // },
      ],
      responses: {
        200: {
          description: "Successfully getting space categories",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  SpaceCategories: {
                    type: "object",
                    properties: {
                      id: { example: 15 },
                      name: { example: "Meeting hall" },
                      slug: { example: "Meeting_hall" },
                      type_identifier_id: { example: 3 },
                    },
                  },
                },
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
                type: "object",
                properties: {
                  success: { example: "true" },
                  spaceAmenities: {
                    type: "object",
                    properties: {
                      id: { example: 1 },
                      name: { example: "wifi" },
                      slug: { example: "wi_fi" },
                      type_identifier_id: { example: 3 },
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
