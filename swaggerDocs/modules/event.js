const event = require('../schema/event');
module.exports = {
  '/event': {
    get:{
      tags: ['Event'],
      summary: "List event",
      operationId: 'getEvents',
      parameters: [],
      responses:{
        '200':{
          description:"Events were obtained",
          content:{
            'application/json':{
              schema:{
                $ref:'#/components/schemas/Event'
              }
            }
          }
        }
      }
    },
    post:{
      tags: ['Event'],
      summary: "Create an event",
      operationId: 'postEvent',
      requestBody: {
        content: {
          "application/json": {
            schema:{
              ...event.CreateEvent
            }
          },
        },
      },      
      responses:{
        '200':{
          description:"Event has been created",
          content:{
            'application/json':{
              schema:{
                $ref:'#/components/schemas/Event'
              }
            }
          }
        }
      }
    }
  },
  '/event/{id}': {
    get:{
      tags: ['Event'],
      summary: "List event by id",
      operationId: 'getEvent',
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of event to return",
          required: true,
          type: "integer",
          format: "int64"
        }
      ],
      responses:{
        '200':{
          description:"Event were obtained",
          content:{
            'application/json':{
              schema:{
                $ref:'#/components/schemas/Event'
              }
            }
          }
        }
      }
    },
    put:{
      tags: ['Event'],
      summary: "Update event",
      operationId: 'putEvent',
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of event to update",
          required: true,
          type: "integer",
          format: "int64"
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema:{
              ...event.CreateEvent
            }
          },
        },
      },      
      responses:{
        '200':{
          description:"Event has been updated",
          content:{
            'application/json':{
              schema:{
                $ref:'#/components/schemas/Event'
              }
            }
          }
        }
      }
    },
    delete: {
      tags: ['Event'],
      summary: "Delete event by id",
      operationId: "deleteEvent",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of event to delete",
          required: true,
          type: "integer",
          format: "int64"
        }
      ],
      responses:{
        '200':{
          description:"Event is deleted",
          content:{
            'application/json':{
              schema:{
                $ref:'#/components/schemas/Delete'
              }
            }
          }
        }
      },      
    },
  },
  '/event/{id}/invite': {
    get:{
      tags: ['Event invites'],
      summary: "fetch event invites",
      operationId: 'getEventInvites',
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of event to return",
          required: true,
          type: "integer",
          format: "int64"
        }
      ],
      responses: {
        '200': {
          description:"Ever has been obtained",
          content: {
            'application/json': {
              schema: {
                type:'object',
                properties: {
                  event_id: {
                    type:"number",
                    description:"event id of the event invite",
                    example: 1
                  },
                  invitee_id: {
                    type:"number",
                    description:"invitee id of the event invitee",
                    example: 13
                  },
                  rspv_status: {
                    type:"boolean",
                    description:"status of the event invite",
                    example: false
                  },
                  invite_code: {
                    type:"string",
                    description:"invite code",
                    example: "aB4Dg"
                  },
                },
              }
            }
          }
        }
      }
    },
    post:{
      tags: ['Event invites'],
      summary: "create event invites",
      operationId: 'postEventInvites',
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of event to create",
          required: true,
          type: "integer",
          format: "int64"
        }
      ],
      requestBody: {
        content: {
          "application/json": {
            schema:{
              type: 'object',
              properties: {
                user_id: {
                  type: "number",
                  description: "user id of the event invitee",
                  example: 1723,
                },
                invite_subject: {
                  type: "string",
                  description: "email subject",
                  example:"John's birthday",
                },
                sent_reminder_days: {
                  type: "number",
                  description:"reminder for invite",
                  example: 7,
                },
                invitee: {
                  type: "array",
                  items: {
                    type: "string"
                  },
                  description: "email of invitees",
                  example: [
                    "pri@gmail.com", "chetan@yahoo.com",
                  ],
                },
              },
            }
          },
        },
      },
      responses: {
        '200': {
          description:"Ever has been obtained",
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  invite_sent: {
                    type:"boolean",
                    description:"event invite sent",
                    example: true
                  },
                },
              }
            }
          }
        }
      }
    }
  },  
  '/event/{id}/image': {
    get:{
      tags: ['Event'],
      summary: "fetch event image",
      operationId: 'getEventImage',
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of event to return",
          required: true,
          type: "integer",
          format: "int64"
        }
      ],
      responses:{
        '200':{
          description:"Ever has been obtained",
          content:{
            'image/png': {
              schema: {
                type: "string",
                format: "binary",
              }
            }
          }
        }
      }
    }
  },
  '/event/{id}/archive': {
    post: {
      tags: ['Event'],
      summary: "archive an event",
      operationId: 'postEventArchive',
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of event to archive",
          required: true,
          type: "integer",
          format: "int64"          
        }
      ],
      responses:{
        '200':{
          description:"Event is archived",
          content: {
            'application/json':{
              schema:{
                $ref:'#/components/schemas/Delete'
              }
            }
          }
        }
      }
    }
  }
}
