const receiver = require('../schema/receiver');
const payments = require('../schema//payments');
module.exports = {
  '/receiver': {
    get:{
      tags: ['Receiver'],
      summary: "List receiver",
      operationId: 'getReceivers',
      parameters: [],
      responses:{
        '200':{
          description:"Receivers were obtained",
          content:{
            'application/json':{
              schema:{
                $ref:'#/components/schemas/Receiver'
              }
            }
          }
        }
      }
    },
    post:{
      tags: ['Receiver'],
      summary: "Create a new receiver",
      operationId: 'postReceiver',
      parameters: [],
      requestBody: {
        content: {
          "application/json": {
            schema:{
              ...receiver.CreateReceiver
            }
          },
        },
      },
      responses:{
        '200':{
          description:"receiver has been created",
          content:{
            'application/json':{
              schema:{
                $ref:'#/components/schemas/Receiver'
              }
            }
          }
        }
      }
    }    
  },
  '/receiver/{id}': {
    get:{
      tags: ['Receiver'],
      summary: "List receiver by id",
      operationId: 'getReceiver',
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of receiver to return",
          required: true,
          type: "integer",
          format: "int64"
        }
      ],
      responses:{
        '200':{
          description:"Receiver were obtained",
          content:{
            'application/json':{
              schema:{
                $ref:'#/components/schemas/Receiver'
              }
            }
          }
        }
      }
    },
    delete: {
      tags: ['Receiver'],
      summary: "Delete receiver by id",
      operationId: "deleteReceiver",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of receiver to delete",
          required: true,
          type: "integer",
          format: "int64"
        }
      ],
      responses:{
        '200':{
          description:"Receiver were obtained",
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
      tags: ['Receiver'],
      summary: "Update a receiver",
      operationId: 'putReceiver',
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of receiver to return",
          required: true,
          type: "integer",
          format: "int64"
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema:{
              ...receiver.CreateReceiver
            }
          },
        },
      },
      responses:{
        '200':{
          description:"receiver has been updated",
          content:{
            'application/json':{
              schema:{
                $ref:'#/components/schemas/Receiver'
              }
            }
          }
        }
      }
    }    
  },
  '/receiver/{id}/image': {
    get:{
      tags: ['Receiver images'],
      summary: "fetch receiver image",
      operationId: 'getReceiverImage',
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of receiver to return",
          required: true,
          type: "integer",
          format: "int64"
        }
      ],
      responses:{
        '200':{
          description:"receiver were obtained",
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
      tags: ['Receiver images'],
      summary: "upload a receiver Image",
      operationId: 'postReceiverImage',
      parameters: [],
      requestBody: {
        content: {
          "application/json": {
            schema:{
              ...receiver.CreateReceiver
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
  '/receiver/{id}/archive': {
    post: {
      tags: ['Receiver'],
      summary: "archive a receiver",
      operationId: 'postReceiverArchive',
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of receiver to archive",
          required: true,
          type: "integer",
          format: "int64"
        }
      ],
      responses:{
        '200':{
          description:"Receiver archived",
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
  '/receiver/{id}/account': {
    post:{
      tags: ['Receiver account details'],
      summary: "create receiver bank",
      operationId: 'postReceiverBank',
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of receiver",
          required: true,
          type: "integer",
          format: "int64"
        }
      ],
      requestBody: {
        content: {
          "application/json": {
            schema:{
              ...payments.CreateBank,
            },
          },
        },
      },
      responses:{
        '200':{
          description:"Receiver has been obtained",
          content:{
            "application/json": {
              schema:{
                ...payments.Bank, 
              }
            }
          }
        }
      }
    },
    get:{
      tags: ['Receiver account details'],
      summary: "get receiver banks",
      operationId: 'getReceiverBank',
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of receiver",
          required: true,
          type: "integer",
          format: "int64"
        }
      ],
      responses:{
        '200':{
          description:"Receiver has been obtained",
          content:{
            "application/json": {
              schema:{
                ...payments.Bank,
              }
            }
          }
        }
      }
    }
  },
  '/receiver/{id}/account/{accountid}': {
    put:{
      tags: ['Receiver account details'],
      summary: "update receiver bank",
      operationId: 'putReceiverBank',
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of receiver",
          required: true,
          type: "integer",
          format: "int64"
        },
        {
          name: "accountid",
          in: "path",
          description: "ID of receiver account",
          required: true,
          type: "integer",
          format: "int64"
        }
      ],
      requestBody: {
        content: {
          "application/json": {
            schema:{
              ...payments.CreateBank,
            },
          },
        },
      },
      responses:{
        '200':{
          description:"Receiver has been obtained",
          content:{
            "application/json": {
              schema:{
                ...payments.Bank, 
              }
            }
          }
        }
      }
    },
    get:{
      tags: ['Receiver account details'],
      summary: "get receiver bank details by id",
      operationId: 'getReceiverBankById',
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of receiver",
          required: true,
          type: "integer",
          format: "int64"         
        },
        {
          name: "accountid",
          in: "path",
          description: "ID of receiver account",
          required: true,
          type: "integer",
          format: "int64"
        }        
      ],
      responses:{
        '200':{
          description:"Receiver has been obtained",
          content:{
            "application/json":{
              schema:{
                ...payments.Bank,
              }
            }
          }
        }
      }
    },
    delete:{
      tags: ['Receiver account details'],
      summary: "delete receiver banks",
      operationId: 'deleteReceiverBank',
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of receiver",
          required: true,
          type: "integer",
          format: "int64"
        },
        {
          name: "accountid",
          in: "path",
          description: "ID of receiver account",
          required: true,
          type: "integer",
          format: "int64"
        },
      ],
      responses:{
        '200':{
          description:"Receiver has been obtained",
          content:{
            "application/json": {
              schema:{
                ...payments.Bank,
              }
            }
          }
        }
      }
    }
  },
}