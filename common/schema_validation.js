const Joi = require("joi");

//user schema validation
const userSchemaValidation = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string()
    .email()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "in"] } }),
  phone_number: Joi.string()
    .length(10)
    .pattern(/[6-9]{1}[0-9]{9}/)
    .required(),
  date_of_birth: Joi.date().greater(new Date("1940-01-01")),
  password: Joi.string().pattern(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[ -\/:-@\[-\`{-~]).{8,}$/
  ),
  role_id: Joi.number().required(),
});

//login time user validation
const loginuserSchemaValidation = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "in"] } }),
  password: Joi.string()
    .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[ -\/:-@\[-\`{-~]).{8,}$/)
    .required(),
});

//role schema validation
const roleSchemaValidation = Joi.object({
  name: Joi.string().required(),
});

module.exports = {
  userSchemaValidation,
  loginuserSchemaValidation,
  roleSchemaValidation,
};
