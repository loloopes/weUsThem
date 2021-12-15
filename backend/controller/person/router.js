const express = require('express');
const create = require('./create');
const remove = require('./remove');
const update = require('./update');
const getAll = require('./getAll');

const router = express.Router({ mergeParams: true });

router.post('/create', create);
router.delete('/remove', remove);
router.put('/update', update);
router.get('/get', getAll)

module.exports = router;