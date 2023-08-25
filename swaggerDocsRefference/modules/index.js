const authenticate = require('./authenticate');
const user = require('./user');
const gift = require('./gift');
const event = require('./event');
const receiver = require('./receiver');

module.exports = {
  paths: {
    ...authenticate,
    ...user,
    ...gift,
    ...receiver,
    ...event,
  }
}