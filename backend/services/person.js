const person = require('../models');

const create = async (individual) => person.create(individual);

const remove = async (name) => person.remove(name);

const getAll = async () => {
  return person.getAll();
}

const update = async (name, newName, newPhone, newEmail) => person.update(name, newName, newPhone, newEmail)

module.exports = { create, remove, update, getAll };