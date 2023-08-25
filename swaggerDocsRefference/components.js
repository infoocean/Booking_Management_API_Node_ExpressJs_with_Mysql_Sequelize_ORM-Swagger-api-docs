const user = require('./schema/user');
const gift = require('./schema/gift');
const event = require('./schema/event');
const receiver = require('./schema/receiver');
const payments = require('./schema/payments');
const contribution = require('./schema/contribution');
const notification = require('./schema/notification');
const thankyou = require('./schema/thankyou');

module.exports = {
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        in: "header"
      }
    },
    schemas: {
      User: user.User,
      Receiver: receiver.Receiver,
      ReceiverAccount: payments.Bank,
      Gift: gift.Gift,
      Event: event.Event,
      Contribution: contribution.Contribution,
      Notification: notification.Notification,
      Thankyou: thankyou.Thankyou,
      BankCard: payments.Card,
      Error: {
        type:'object',
        properties: {
          httpStatusCode: {
            type: "number"
          },
          errorCode: {
            type: "string"
          },
          message:{
            type:'string'
          },
        },
      },
      Delete:{
        type:'object',
        properties: {
          id: {
            type: "number"
          },
          message:{
            type:'string'
          },
        },
      }
    }
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
}