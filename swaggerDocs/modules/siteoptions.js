module.exports = {
  "/addsiteoptionmeta": {
    post: {
      tags: ["Site Options Meta"],
      summary: "add site options meta into system",
      operationId: "addsiteoptionmeta",
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
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlNodWJoYW0gS3VtYXIiLCJlbWFpbCI6InNqMjU4NTA5N0BnbWFpbC5jb20iLCJyb2xlIjoxLCJpYXQiOjE2OTIzNDU2MzQsImV4cCI6MTY5MjM3NDQzNH0.RQdSk-OmCvHqU2aKHyBgauUOndcvBKNxX6F7BwfdYpw",
        },
      ],
      requestBody: {
        content: {
          "multipart/form-data": {
            schema: {
              type: "object",
              properties: {
                title: {
                  type: "string",
                  description: "Your website title",
                  example: "My Shoping App",
                },
                fav_icon: {
                  type: "string",
                  description: "Your website favicon",
                  format: "binary",
                },
                company_logo: {
                  type: "string",
                  description: "Your website logo(company logo)",
                  format: "binary",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "site options meta created successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: {
                    example: "true",
                  },
                  message: {
                    example: "site option created successfylly!",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/getsiteoptionmeta": {
    get: {
      tags: ["Site Options Meta"],
      summary: "get site options meta",
      operationId: "getsiteoptionmeta",
      parameters: [],
      responses: {
        200: {
          description: "getting site options meta successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  SiteOptionMeta: {
                    type: "object",
                    properties: {
                      id: { example: 9 },
                      key: { example: "title" },
                      value: {
                        example: "My Shoping App",
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
  "/editsiteoptionmeta": {
    put: {
      tags: ["Site Options Meta"],
      summary: "update site options meta",
      operationId: "editsiteoptionmeta",
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
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlNodWJoYW0gS3VtYXIiLCJlbWFpbCI6InNqMjU4NTA5N0BnbWFpbC5jb20iLCJyb2xlIjoxLCJpYXQiOjE2OTIzNDU2MzQsImV4cCI6MTY5MjM3NDQzNH0.RQdSk-OmCvHqU2aKHyBgauUOndcvBKNxX6F7BwfdYpw",
        },
      ],
      requestBody: {
        content: {
          "multipart/form-data": {
            schema: {
              type: "object",
              properties: {
                title: {
                  type: "string",
                  description: "Your website title",
                  example: "My Shoping App",
                },
                fav_icon: {
                  type: "string",
                  description: "Your website favicon",
                  format: "binary",
                },
                company_logo: {
                  type: "string",
                  description: "Your website logo(company logo)",
                  format: "binary",
                },
              },
            },
          },
        },
      },
      responses: {
        202: {
          description: "site options meta updated successfully ",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: {
                    example: "true",
                  },
                  message: {
                    example: "site option meta updated successfully",
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
