module.exports = {
  "/": {
    tags: ["Check Server"],
    summary: "check server is running or not",
    operationId: "/",
    responses: {
      200: {
        description: "Successful response",
        content: {
          "application/json": {},
        },
      },
    },
  },
};
