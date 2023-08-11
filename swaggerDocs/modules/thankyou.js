const thankyou = require('../schema/thankyou');

module.exports = {
  '/gift/{giftid}/thankyou': {
    get:{
      tags: ['Gift Thankyou Card'],
      summary: "Lists of gift thankyou card",
      operationId: 'getGiftThankyou',
      parameters: [
        {
          name: "giftid",
          in: "path",
          description: "ID of gift",
          required: true,
          type: "integer",
          format: "int64"
        }
      ],
      responses:{
        '200':{
          description:"gift thankyou card were obtained",
          content:{
            'application/json':{
              schema:{
                $ref:'#/components/schemas/Thankyou'
              }
            }
          }
        }
      }
    },
    post:{
      tags: ['Gift Thankyou Card'],
      summary: "Create a new thankyou card",
      operationId: 'postThankyou',
      parameters: [
        {
          name: "giftid",
          in: "path",
          description: "ID of gift",
          required: true,
          type: "integer",
          format: "int64"
        }
      ],
      requestBody: {
        content: {
          "application/json": {
            schema:{
              ...thankyou.createThankyou
            }
          },
        },
      },      
      responses:{
        '200':{
          description:"Thankyou card has been created",
          content:{
            'application/json':{
              schema:{
                $ref:'#/components/schemas/Thankyou'
              }
            }
          }
        }
      }
    }
  },
  '/gift/{giftid}/thankyou/{id}': {
    delete: {
      tags: ['Gift Thankyou Card'],
      summary: "Delete a thankyou card",
      operationId: 'deleteThankyou',
      parameters: [
        {
          name: "giftid",
          in: "path",
          description: "ID of gift",
          required: true,
          type: "integer",
          format: "int64"
        },
        {
          name: "id",
          in: "path",
          description: "ID of thankyou card",
          required: true,
          type: "integer",
          format: "int64"
        }
      ],
      responses:{
        '200':{
          description:"Thankyou card has been deleted",
          content:{
            'application/json':{
              schema:{
                $ref:'#/components/schemas/Delete'
              }
            }
          }
        }
      }
    }
  },
 }