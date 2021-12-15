const person = require('../../services/person');

module.exports = async (req, res, next) => {
  try {
    const { name } = req.body;

    const removeResult = await person.remove(name);

    return res.status(200).json(removeResult);
  } catch (err) {
    next(err);
  }
};
