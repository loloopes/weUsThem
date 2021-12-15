const connection = require('./connection');

module.exports = async (individual) => (await connection()).collection('contactList').insertOne(individual);
