const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.post.getAllPosts);
router.post('/:post', ctrl.post.createPost);
router.get('/postId', ctrl.post.getPostsByCatType);
router.get('/:postId', ctrl.post.getPostById);
router.delete('/:postId', ctrl.post.deletePost);
router.put('/:postId', ctrl.post.editPost);

module.exports = router;
