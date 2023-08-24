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
              //...automobile.addautomobile,
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
                // $ref:'#/components/schemas/Gift'
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
        },
      ],
      responses: {
        200: {
          description: " Categories or Amenities are obtained",
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
  "/editcategoriesamenities/{id}": {
    put: {
      tags: ["Categories Amenities"],
      summary: "update categories or amenities by id",
      operationId: "editcategoriesamenities",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of Categories or Amenities to return",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        200: {
          description: " Categories or Amenities are updated",
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
  "/getcategoriesamenitiesbytypeidentifierid": {
    get: {
      tags: ["Categories Amenities"],
      summary: "get categories or amenities by type identifiers id",
      operationId: "getcategoriesamenitiesbytypeidentifierid",
      parameters: [
        {
          name: "type_identifier_id",
          in: "query",
          required: false,
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
          description: " Categories or Amenities are obtained",
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
