const Joi = require("joi");
//forgot password email validation
const emailValidation = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "in"] } }),
});
module.exports = { emailValidation };
