const { update } = require('../../models');
const person = require('../../services/person');

module.exports = async (req, res, next) => {
  try {
    const {name, newName, newPhone, newEmail} = req.body;

    const updateResult = await person.update(name, newName, newPhone, newEmail)
    console.log(updateResult);
    return res.status(200).send('Updated!')
  } catch (err) {
    console.log(err);
    next(err);
  }
}