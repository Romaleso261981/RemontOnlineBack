const Joi = require("joi");

const authSchema = Joi.object({
  password: Joi.string(),
  email: Joi.string(),
  token:Joi.string(),
});

module.exports = {
  authSchema,
};
