const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.post.getAllPosts);
router.post('/:city', ctrl.post.createPost);
router.get('/user', ctrl.post.getPostsByCatType);
router.get('/:postId', ctrl.post.getPostById);
router.delete('/:postId', ctrl.post.deletePost);
router.put('/:postId', ctrl.post.editPost);

module.exports = router;
