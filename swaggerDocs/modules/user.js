const user = require("../schema/user");
const payments = require("../schema/payments");
const notification = require("../schema/notification");
const thankyou = require("../schema/thankyou");
module.exports = {
  "/adduser": {
    get: {
      tags: ["User"],
      summary: "user registration",
      operationId: "adduser",
      parameters: [],
      responses: {
        201: {
          description: "Users were obtained",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
      },
    },
  },
  "/user/{id}": {
    get: {
      tags: ["User"],
      summary: "List user by id",
      operationId: "getUser",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of user to return",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        200: {
          description: "User has been obtained",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
      },
    },
    put: {
      tags: ["User"],
      summary: "Update a user",
      operationId: "putUser",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of user to update",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              ...user.UpdateUser,
            },
          },
        },
      },
      responses: {
        200: {
          description: "User has been updated",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
      },
    },
  },
  "/user/email/{email}": {
    get: {
      tags: ["User"],
      summary: "List user by email",
      operationId: "getUserByEmail",
      parameters: [
        {
          name: "email",
          in: "path",
          description: "Email of user to return",
          required: true,
          type: "string",
        },
      ],
      responses: {
        200: {
          description: "User has been obtained",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
      },
    },
  },
  "/user/{id}/image": {
    get: {
      tags: ["User"],
      summary: "fetch user image",
      operationId: "getUserImage",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of user to return",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        200: {
          description: "User has been obtained",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
      },
    },
  },
  "/user/{id}/payment/card": {
    post: {
      tags: ["User payment details"],
      summary: "create user card",
      operationId: "postUserCard",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of user",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              ...payments.CreateCard,
            },
          },
        },
      },
      responses: {
        200: {
          description: "User has been obtained",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  customer_id: {
                    type: "string",
                    description: "stripe customer id",
                    example: "cus_12dbfggt34d",
                  },
                  finger_id: {
                    type: "string",
                    description: "stripe card finger id",
                    example: "37mIV5k0sN0vCmjw",
                  },
                  last4: {
                    type: "string",
                    description: "last 4 number of user card",
                    example: "1723",
                  },
                },
              },
            },
          },
        },
      },
    },
    get: {
      tags: ["User payment details"],
      summary: "get user card",
      operationId: "getUserCard",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of user",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        200: {
          description: "User has been obtained",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  customer_id: {
                    type: "string",
                    description: "stripe customer id",
                    example: "cus_12dbfggt34d",
                  },
                  finger_id: {
                    type: "string",
                    description: "stripe card finger id",
                    example: "37mIV5k0sN0vCmjw",
                  },
                  last4: {
                    type: "string",
                    description: "last 4 number of user card",
                    example: "1723",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  // '/user/{id}/payment/bank': {
  //   post:{
  //     tags: ['User payment details'],
  //     summary: "create user bank",
  //     operationId: 'postUserBank',
  //     parameters: [
  //       {
  //         name: "id",
  //         in: "path",
  //         description: "ID of user",
  //         required: true,
  //         type: "integer",
  //         format: "int64"
  //       }
  //     ],
  //     requestBody: {
  //       content: {
  //         "application/json": {
  //           schema:{
  //             ...payments.CreateBank,
  //           },
  //         },
  //       },
  //     },
  //     responses:{
  //       '200':{
  //         description:"User has been obtained",
  //         content:{
  //           "application/json": {
  //             schema:{
  //               ...payments.Bank,
  //             }
  //           }
  //         }
  //       }
  //     }
  //   },
  //   get:{
  //     tags: ['User payment details'],
  //     summary: "get user bank",
  //     operationId: 'getUserBank',
  //     parameters: [
  //       {
  //         name: "id",
  //         in: "path",
  //         description: "ID of user",
  //         required: true,
  //         type: "integer",
  //         format: "int64"
  //       }
  //     ],
  //     responses:{
  //       '200':{
  //         description:"User has been obtained",
  //         content:{
  //           "application/json": {
  //             schema:{
  //               ...payments.Bank,
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // },
  "/user/{id}/notification": {
    get: {
      tags: ["User notification"],
      summary: "Lists notifications",
      operationId: "getNotification",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of user to return",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        200: {
          description: "Notifications were obtained",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Notification",
              },
            },
          },
        },
      },
    },
  },
  "/user/{id}/notification/{notificationid}/read": {
    put: {
      tags: ["User notification"],
      summary: "Update user notification",
      operationId: "putUserNotificationRead",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of notification to update",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              ...notification.Notification,
            },
          },
        },
      },
      responses: {
        200: {
          description: "Notification has been updated",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Notification",
              },
            },
          },
        },
      },
    },
  },
  "/user/{id}/notification/{notificationid}/delete": {
    put: {
      tags: ["User notification"],
      summary: "Delete notification by id",
      operationId: "putUserNotificationDelete",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of notification to delete",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        200: {
          description: "Notification is deleted",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Notification",
              },
            },
          },
        },
      },
    },
  },
  "/user/{id}/thankyou": {
    get: {
      tags: ["User"],
      summary: "Get user thankyou",
      operationId: "getUserThankyou",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of user to return",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        200: {
          description: "Thankyou were obtained",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Thankyou",
              },
            },
          },
        },
      },
    },
  },
};
