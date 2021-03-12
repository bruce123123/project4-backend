const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/all', ctrl.seed.getAllSeed);
router.get('/:seed', ctrl.seed.getSeedById);

module.exports = router;