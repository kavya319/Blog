const express = require("express");
const router = express.Router();

// Controllers
const { dummyLink } = require('../controllers/LikeController');
const { createComment } = require('../controllers/CommentController');
const { createPost, getAllPosts } = require('../controllers/PostController');

// Routes
router.post("/comments/create", createComment);
router.get("/dummyroute", dummyLink);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);

module.exports = router;