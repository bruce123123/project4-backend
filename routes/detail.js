const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.get('/detail', ctrl.detail.getDetail);
router.put('/detail', ctrl.detail.editDetail);

module.exports = router;