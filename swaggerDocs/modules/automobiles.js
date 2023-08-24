const automobile = require("../schema/automobile");

module.exports = {
  "/addautomobile": {
    get: {
      tags: ["Automobile"],
      summary: "List event",
      operationId: "getEvents",
      parameters: [],
      responses: {
        200: {
          description: "Events were obtained",
          content: {
            "application/json": {
              schema: {
                //$ref:'#/components/schemas/Event'
              },
            },
          },
        },
      },
    },
  },
  "/getautomobiles": {
    get: {
      tags: ["Automobile"],
      summary: "List event by id",
      operationId: "getEvent",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of event to return",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        200: {
          description: "Event were obtained",
          content: {
            "application/json": {
              schema: {
                // $ref:'#/components/schemas/Event'
              },
            },
          },
        },
      },
    },
  },
  "/getautomobile/{id}": {
    get: {
      tags: ["Automobile"],
      summary: "fetch event invites",
      operationId: "getEventInvites",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of event to return",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        200: {
          description: "Ever has been obtained",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  event_id: {
                    type: "number",
                    description: "event id of the event invite",
                    example: 1,
                  },
                  invitee_id: {
                    type: "number",
                    description: "invitee id of the event invitee",
                    example: 13,
                  },
                  rspv_status: {
                    type: "boolean",
                    description: "status of the event invite",
                    example: false,
                  },
                  invite_code: {
                    type: "string",
                    description: "invite code",
                    example: "aB4Dg",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/editautomobile/{id}": {
    get: {
      tags: ["Automobile"],
      summary: "fetch event image",
      operationId: "getEventImage",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of event to return",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        200: {
          description: "Ever has been obtained",
          content: {
            "image/png": {
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
  "/deleteautomobile/{id}": {
    post: {
      tags: ["Automobile"],
      summary: "archive an event",
      operationId: "postEventArchive",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of event to archive",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        200: {
          description: "Event is archived",
          content: {
            "application/json": {
              schema: {
                //$ref:'#/components/schemas/Delete'
              },
            },
          },
        },
      },
    },
  },
  "/getautomobilecategories": {
    post: {
      tags: ["Automobile"],
      summary: "archive an event",
      operationId: "postEventArchive",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of event to archive",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        200: {
          description: "Event is archived",
          content: {
            "application/json": {
              schema: {
                //$ref:'#/components/schemas/Delete'
              },
            },
          },
        },
      },
    },
  },
};
