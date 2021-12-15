const connection = require('./connection');

module.exports = async (oldName, newName, newPhone, newEmail) => {
  return (await connection()).collection('contactList').updateOne({name: oldName}, { $set: {name: newName, email: newEmail,phone: newPhone, }})
}