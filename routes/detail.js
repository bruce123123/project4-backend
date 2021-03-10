const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.get('/post', ctrl.user.getPost);
router.put('/post', ctrl.user.editPost);

module.exports = router;