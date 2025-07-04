const Joi = require("joi");

const validateYear = (query) => {
  const schema = Joi.object({
    year: Joi.number().integer().min(1877).required(),
  });

  return schema.validate(query);
};

module.exports = { validateYear };
