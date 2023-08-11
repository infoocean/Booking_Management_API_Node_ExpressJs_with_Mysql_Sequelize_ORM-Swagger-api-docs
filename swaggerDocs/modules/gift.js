const { string, binary } = require('joi');
const gift = require('../schema/gift');
const contribution = require('./contribution');
const thankyou = require('./thankyou');

module.exports = {
  '/gift': {
    get:{
      tags: ['Gift'],
      summary: "List gifts",
      operationId: 'getGifts',
      parameters: [],
      responses:{
        '200':{
          description:"Gifts were obtained",
          content:{
            'application/json':{
              schema:{
                $ref:'#/components/schemas/Gift'
              }
            }
          }
        }
      }
    },
    post:{
      tags: ['Gift'],
      summary: "Create a gift",
      operationId: 'postGift',
      parameters: [],
      requestBody: {
        content: {
          "application/json": {
            schema:{
              ...gift.CreateGift
            }
          },
        },
      },      
      responses:{
        '200':{
          description:"Gift has been created",
          content:{
            'application/json':{
              schema:{
                $ref:'#/components/schemas/Gift'
              }
            }
          }
        }
      }
    }    
  },
  '/gift/{id}': {
    get:{
      tags: ['Gift'],
      summary: "List gift by id",
      operationId: 'getGift',
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of gift to return",
          required: true,
          type: "integer",
          format: "int64"
        }
      ],
      responses:{
        '200':{
          description:"Gift were obtained",
          content:{
            'application/json':{
              schema:{
                $ref:'#/components/schemas/Gift'
              }
            }
          }
        }
      }
    },
    delete: {
      tags: ['Gift'],
      summary: "Delete gift by id",
      operationId: "deleteGift",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of gift to delete",
          required: true,
          type: "integer",
          format: "int64"
        }
      ],
      responses:{
        '200':{
          description:"Gift is deleted",
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
    put:{
      tags: ['Gift'],
      summary: "Update a gift",
      operationId: 'putGift',
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of gift to update",
          required: true,
          type: "integer",
          format: "int64"
        }
      ],
      requestBody: {
        content: {
          "application/json": {
            schema:{
              ...gift.UpdateGift
            }
          },
        },
      },
      responses:{
        '200':{
          description:"Gift has been updated",
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
  '/gift/{id}/image': {
    get:{
      tags: ['Gift images'],
      summary: "fetch gift image",
      operationId: 'getGiftImage',
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of gift to return",
          required: true,
          type: "integer",
          format: "int64"
        }
      ],
      responses:{
        '200':{
          description:"Gift were obtained",
          content:{
            'image/json':{
              schema:{
                type: "string",
                format: "binary",
              }
            }
          }
        }
      }
    },
    post:{
      tags: ['Gift images'],
      summary: "upload a gift Image",
      operationId: 'postGiftImage',
      parameters: [],
      requestBody: {
        content: {
          "application/json": {
            schema:{
              ...gift.CreateGift
            }
          },
        },
      },      
      responses:{
        '200':{
          description:"Gift image has been uploaded",
          content:{
            'application/json':{
              schema:{
                $ref:'#/components/schemas/Gift'
              }
            }
          }
        }
      }
    }
  },
  '/gift/{id}/archive': {
    post: {
      tags: ['Gift'],
      summary: "archive a gift",
      operationId: 'postGiftArchive',
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of gift to archive",
          required: true,
          type: "integer",
          format: "int64"
        }
      ],
      responses:{
        '200':{
          description:"Gift is archived",
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
  },
  '/gift/{id}/complete':{
    post:{
      tags:['Gift'],
      summary:"Complete Gift Funding",
      operationId: 'postCompleteGift',
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
          description:"Gift funding has been completed",
          content:{
            'application/json':{
              schema:{
                $ref:'#/components/schemas/Gift'
              }
            }
          }
        }
      }
    }
  },
  ...contribution,
  ...thankyou,
}