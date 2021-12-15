const connection = require('./connection');

module.exports = async () => (await connection()).collection('contactList').find().toArray();