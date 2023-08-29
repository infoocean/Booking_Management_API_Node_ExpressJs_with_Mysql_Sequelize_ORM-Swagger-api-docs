const Joi = require("joi");
//user signup validation
const userSignupValidation = Joi.object({
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
  password: Joi.string()
    .required()
    .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[ -\/:-@\[-\`{-~]).{8,}$/),
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
//reset time validation
const resetSchemaValidation = Joi.object({
  token: Joi.string().required(),
  password: Joi.string()
    .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[ -\/:-@\[-\`{-~]).{8,}$/)
    .required(),
});
//change password validation
const changePasswordValidation = Joi.object({
  current_password: Joi.string()
    .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[ -\/:-@\[-\`{-~]).{8,}$/)
    .required(),
  new_password: Joi.string()
    .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[ -\/:-@\[-\`{-~]).{8,}$/)
    .required(),
  confirm_password: Joi.string()
    .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[ -\/:-@\[-\`{-~]).{8,}$/)
    .required(),
});
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
  date_of_birth: Joi.string().required(),
  role_id: Joi.number().required(),
});
//role schema validation
const roleSchemaValidation = Joi.object({
  name: Joi.string().required(),
});
//site options meta schema validation
const siteOptionsMetaSchemaValidation = Joi.object({
  title: Joi.string().required(),
  fav_icon: Joi.string().required(),
  company_logo: Joi.string().required(),
});

module.exports = {
  userSignupValidation,
  userSchemaValidation,
  loginuserSchemaValidation,
  roleSchemaValidation,
  resetSchemaValidation,
  changePasswordValidation,
  siteOptionsMetaSchemaValidation,
};
