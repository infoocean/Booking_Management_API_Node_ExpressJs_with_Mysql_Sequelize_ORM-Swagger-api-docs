const contribution = require('../schema/contribution');

module.exports = {
    '/gift/{id}/contribution': {
      get:{
        tags: ['Gift contributions'],
        summary: "Lists of gift contibutions",
        operationId: 'getGiftContribution',
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID of gift",
            required: true,
            type: "integer",
            format: "int64"
          }
        ],
        responses:{
          '200':{
            description:"gift contribution were obtained",
            content:{
              'application/json':{
                schema:{
                  $ref:'#/components/schemas/Contribution'
                }
              }
            }
          }
        }
      },
      post:{
        tags: ['Gift contributions'],
        summary: "Create a new contribution",
        operationId: 'postContribution',
        parameters: [
          {
            name: "id",
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
                ...contribution.createContribution
              }
            },
          },
        },      
        responses:{
          '200':{
            description:"Contribution has been created",
            content:{
              'application/json':{
                schema:{
                  $ref:'#/components/schemas/Contribution'
                }
              }
            }
          }
        }
      }
    },
 }