const connection = require('./connection');

module.exports = async (data) => (await connection()).collection('contactList').deleteOne({name: data});
