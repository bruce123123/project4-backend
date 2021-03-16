const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.get('/:id', ctrl.detail.getDetail);
router.put('/:id', ctrl.detail.editDetail);

module.exports = router;