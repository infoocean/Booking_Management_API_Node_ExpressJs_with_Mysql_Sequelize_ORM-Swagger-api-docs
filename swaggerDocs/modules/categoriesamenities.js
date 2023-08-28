const typeidentifier = require("../schema/typeidentifier");
module.exports = {
  "/addcategoriesoramenities": {
    post: {
      tags: ["Categories Amenities"],
      summary: "add categories amenities",
      operationId: "addcategoriesoramenities",
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
              ...typeidentifier.createcategories_amenities_properties,
            },
          },
        },
      },
      responses: {
        201: {
          description: "Gifts were obtained",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  succcess: { example: "true" },
                  message: { example: "created successfylly!" },
                  data: {
                    ...typeidentifier.getcategories_amenities_properties,
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/getcategoriesamenities/{id}": {
    get: {
      tags: ["Categories Amenities"],
      summary: "get categories or amenities by id",
      operationId: "getcategoriesamenities",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of Categories or Amenities to return",
          required: true,
          type: "integer",
          format: "int64",
          example: 2,
        },
      ],
      responses: {
        200: {
          description: "Categories or Amenities getting successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                succcess: { example: "true" },
                properties: {
                  data: {
                    ...typeidentifier.getcategories_amenities_properties,
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/editcategoriesamenities/{id}": {
    put: {
      tags: ["Categories Amenities"],
      summary: "update categories or amenities by id",
      operationId: "editcategoriesamenities",
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
          description: "ID of Categories or Amenities to update",
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
              ...typeidentifier.createcategories_amenities_properties,
            },
          },
        },
      },
      responses: {
        202: {
          description: " Categories or Amenities updated successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  succcess: { example: "true" },
                  message: { example: "data updated successfully" },
                },
              },
            },
          },
        },
      },
    },
  },
  "/getcategoriesamenitiesbytypeidentifierid": {
    get: {
      tags: ["Categories Amenities"],
      summary: "get categories or amenities by type identifiers id",
      operationId: "getcategoriesamenitiesbytypeidentifierid",
      parameters: [
        {
          name: "type_identifier_id",
          in: "query",
          required: true,
          style: "form",
          explode: true,
          schema: {
            type: "integer",
          },
          example: "4",
        },
      ],
      responses: {
        200: {
          description: " Categories or Amenities are getting successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  data: {
                    properties: {
                      id: { example: 10 },
                      name: { example: "WiFi" },
                      slug: { example: "Wi_Fi" },
                      type_identifier_id: { example: 2 },
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
