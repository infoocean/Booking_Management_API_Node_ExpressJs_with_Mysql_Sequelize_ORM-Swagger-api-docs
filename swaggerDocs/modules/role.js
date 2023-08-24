module.exports = {
  "/getroles": {
    get: {
      tags: ["Role"],
      summary: "get list of all roles",
      responses: {
        200: {
          description: "successful getting roles",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { example: "true" },
                  id: {
                    example: 1,
                  },
                  name: {
                    example: "admin",
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
