const express = require('express');
const person = require('./person/router');

const root = express.Router();

root.use('/person', person);

module.exports = root;