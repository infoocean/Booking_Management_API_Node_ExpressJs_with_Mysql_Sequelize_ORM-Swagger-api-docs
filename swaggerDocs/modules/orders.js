module.exports = {
  "/giftfcdbgdbhdgfh": {
    get: {
      tags: ["Orders"],
      summary: "List gifts",
      operationId: "giftfcdbgdbhdgfh",
      parameters: [],
      responses: {
        200: {
          description: "Gifts were obtained",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Gift",
              },
            },
          },
        },
      },
    },
  },
  "/gifasdfasft/{id}": {
    get: {
      tags: ["Orders"],
      summary: "List gift by id",
      operationId: "gifasdfasft",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of gift to return",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        200: {
          description: "Gift were obtained",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Gift",
              },
            },
          },
        },
      },
    },
  },
  "/gift/{id}/image": {
    get: {
      tags: ["Orders"],
      summary: "fetch gift image",
      operationId: "getGiftImage",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of gift to return",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        200: {
          description: "Gift were obtained",
          content: {
            "image/json": {
              schema: {
                type: "string",
                format: "binary",
              },
            },
          },
        },
      },
    },
  },
};
