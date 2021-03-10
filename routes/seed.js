const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/all', ctrl.seed.getAll);
router.get('/:city', ctrl.seed.getSeedById);

module.exports = router;