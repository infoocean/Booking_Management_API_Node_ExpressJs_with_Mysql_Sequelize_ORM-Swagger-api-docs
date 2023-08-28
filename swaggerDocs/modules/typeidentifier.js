const typeidentifier = require("../schema/typeidentifier");
module.exports = {
  "/gettypeidentifiers": {
    get: {
      tags: ["Type Identifier"],
      summary: "list of type identifiers",
      operationId: "gettypeidentifiers",
      parameters: [],
      responses: {
        200: {
          description: "type identifiers getting successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  typeidentifiers: {
                    ...typeidentifier.gettypeidentifier,
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/addtypeidentifier": {
    post: {
      tags: ["Type Identifier"],
      summary: "add type identifier",
      operationId: "addtypeidentifier",
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
              ...typeidentifier.createTypeidentifier,
            },
          },
        },
      },
      responses: {
        201: {
          description: "type identifier created successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  message: { example: "Identifier created successfylly!" },
                  identifier: {
                    ...typeidentifier.gettypeidentifier,
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
