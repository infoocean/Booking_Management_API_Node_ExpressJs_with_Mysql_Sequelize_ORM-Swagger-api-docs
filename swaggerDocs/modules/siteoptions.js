module.exports = {
  "/addsiteoptionmeta": {
    post: {
      tags: ["Site Options Meta"],
      summary: "add site options meta",
      operationId: "addsiteoptionmeta",
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
                  example: "My Shoping App",
                },
                fav_icon: {
                  type: "string",
                  format: "binary",
                },
                company_logo: {
                  type: "string",
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
                  title: {
                    type: "string",
                    example: "My Shoping App",
                  },
                  fav_icon: {
                    type: "string",
                    format: "binary",
                  },
                  company_logo: {
                    type: "string",
                    format: "binary",
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
              schema: {},
            },
          },
        },
      },
    },
  },
  "/editsiteoptionmeta": {
    get: {
      tags: ["Site Options Meta"],
      summary: "Delete a thankyou card",
      operationId: "getsiteoptionmeta",
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
                  example: "My Shoping App",
                },
                fav_icon: {
                  type: "string",
                  format: "binary",
                },
                company_logo: {
                  type: "string",
                  format: "binary",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "site options meta updated ",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  title: {
                    type: "string",
                    example: "My Shoping App",
                  },
                  fav_icon: {
                    type: "string",
                    format: "binary",
                  },
                  company_logo: {
                    type: "string",
                    format: "binary",
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
