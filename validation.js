const Joi = require("joi");

const incidentReportValidation = (data) => {
  const schema = Joi.object({
    clientId: Joi.number().required(),
    incidentDesc: Joi.string().min(3).required(),
    city: Joi.string().min(2).required(),
    country: Joi.string().min(3).required(),
    date: Joi.string().required(),
  });

  return schema.validate(data);
};

module.exports = {
  incidentReportValidation,
};
