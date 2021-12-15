const person = require('../../services/person');
const Joi = require('joi');

module.exports = async (req, res, next) => {
  try {
    const {name, email, phone} = req.body;
    const {error} = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().regex(/.+\@.+\..+/).required(),
      phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    }).validate(req.body);

    if (error) return next(error);

    const newPerson = await person.create({name, email, phone});
    
    return res.status(201).json(newPerson);
  } catch (err) {
    next(err);
  }
};
