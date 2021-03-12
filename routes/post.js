const express = require('express');
const { postController, createPost } = require('../controllers/post');

const router = express.Router();

router.get('/', postController);
router.post('/post', createPost);

module.exports = {
    router
};