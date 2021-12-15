const person = require('../../services/person');

module.exports = async (_req, res, next) => {
  try {
    const allProducts = await person.getAll();
    return res.status(200).json(allProducts);
  } catch (err) {
    next(err);
  }
}