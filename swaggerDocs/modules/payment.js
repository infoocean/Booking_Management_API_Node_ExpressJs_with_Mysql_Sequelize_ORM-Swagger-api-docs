module.exports = {
  '/gift/{giftid}/thankyou': {
    get:{
      tags: ['Payment'],
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
  },
  '/gift/{giftid}/thankyou/{id}': {
    delete: {
      tags: ['Payment'],
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