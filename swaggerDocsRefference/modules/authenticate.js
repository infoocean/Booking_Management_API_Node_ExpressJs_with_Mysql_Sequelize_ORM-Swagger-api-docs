module.exports = {
  '/singup': {
    post:{
      tags: ['Login'],
      summary: "Singup user into the system",
      operationId: 'postRegistration',
      produces: [
        "application/json"
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: {
                  description: "The user name for login",
                  required: true,
                  type: "string",
                  example: "Mario Lopez"
                },
                email: {
                  description: "The user email for login",
                  required: true,
                  type: "string",
                  example: "mario@purposit.com"
                },
                password: {
                  description: "The user password for login",
                  required: true,
                  type: "string",
                  example: "Interglobe"
                },
              },
            },            
          },
        },
      },
      responses:{
        '200':{
          description:"successful login",
          content: {
            'application/json':{
              schema:{
                type: "object",
                properties: {
                  token: {
                    type: "string",
                    description: "Access token",
                    example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoibWFyaW9AcHVycG9zaXQuY29tIiwiZmlyc3RfbmFt",
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  '/singin': {
    post:{
      tags: ['Login'],
      summary: "singin user into the system",
      operationId: 'postAuthenticate',
      produces: [
        "application/json"
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  description: "The user email for login",
                  required: true,
                  type: "string",
                  example: "mario@purposit.com"
                },
                password: {
                  description: "The user password for login",
                  required: true,
                  type: "string",
                  example: "Interglobe"
                },
              },
            },            
          },
        },
      },
      responses:{
        '200':{
          description:"successful login",
          content: {
            'application/json':{
              schema:{
                type: "object",
                properties: {
                  token: {
                    type: "string",
                    description: "Access token",
                    example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoibWFyaW9AcHVycG9zaXQuY29tIiwiZmlyc3RfbmFt",
                  }
                }
              }
            }
          }
        }
      }
    }
  },
}