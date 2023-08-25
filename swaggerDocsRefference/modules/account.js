const payments = require('../schema/payments');

module.exports = {
  '/account': {
    get:{
      tags: ['Account'],
      summary: "Lists account",
      operationId: 'getAccounts',
      parameters: [],
      responses:{
        '200':{
          description:"Accounts were obtained",
          content:{
            'application/json':{
              schema:{
                $ref:'#/components/schemas/Account'
              }
            }
          }
        }
       }
     }
   },
   '/account/{id}': {
     get:{
       tags: ['Account'],
       summary: "List account by id",
       operationId: 'getAccount',
       parameters: [
         {
           name: "id",
           in: "path",
           description: "ID of account to return",
           required: true,
           type: "integer",
           format: "int64"
         }
       ],
       responses:{
         '200':{
           description:"Account has been obtained",
           content:{
             'application/json':{
               schema:{
                 $ref:'#/components/schemas/Account'
               } 
             }
           }
         }
       }
     }
   },
   '/account/': {
     post:{
       tags: ['Account'],
       summary: "Create a new account",
       operationId: 'postAccount',
       parameters: [],
       requestBody: {
         content: {
           "application/json": {
             schema:{
               ...payments.CreateAccount
             }
           },
         },
       },
       responses:{
         '200':{
           description:"Account has been created",
           content:{
             'application/json':{
               schema:{
                 $ref:'#/components/schema/Account'
               }
             }
           }
         }
       }
     }
   },
   '/account/{id}/': {
     put:{
       tags: ['Account'],
       summary: "Update an account",
       operationId: 'putAccount',
       parameters: [
         {
           name: "id",
           in: "path",
           description: "ID of Customer to update",
           required: true,
           type: "integer",
           format: "int64"
         }
       ],
       requestBody: {
         content: {
           "application/json": {
             schema:{
               ...payments.CreateAccount
             }
           },
         },
       },
       responses:{
         '200':{
           description: "Account has been updated",
           content:{
             'application/json':{
               schema:{
                 $ref:'#/components/schemas/Account'
               }
             }
           }
         }
       }
     }
   },
}