module.exports = {
  "/gettypeidentifiers": {
    get: {
      tags: ["Type Identifier"],
      summary: "list of identifiers",
      operationId: "gettypeidentifiers",
      parameters: [],
      responses: {
        200: {
          description: "identifier has been obtained obtained",
          content: {
            "application/json": {
              schema: {
                // $ref:'#/components/schemas/Gift'
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
          "application/json": {
            schema: {
              type: "object",
              properties: {
                type: {
                  type: "string",
                  description: "type identifier title",
                  example: "flats_amenities",
                },
                slug: {
                  type: "string",
                  description: "slug of your flats",
                  example: "flats_amenities",
                },
                entity: {
                  type: "string",
                  description: "name of identifier",
                  example: "flats",
                },
              },
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
                //$ref:'#/components/schemas/Gift'
              },
            },
          },
        },
      },
    },
  },
};
