module.exports = {
  "/giftrtgfreswg": {
    get: {
      tags: ["Categories Amenities"],
      summary: "List gifts",
      operationId: "getGifts",
      parameters: [],
      responses: {
        200: {
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
  "/giftsdfsdfg/{id}": {
    get: {
      tags: ["Categories Amenities"],
      summary: "List gift by id",
      operationId: "getGift",
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
                //$ref:'#/components/schemas/Gift'
              },
            },
          },
        },
      },
    },
  },
};
