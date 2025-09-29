const Post = require("../models/PostModel");

// Create a new post
exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;

    // Basic validation
    if (!title || !body) {
      return res.status(400).json({ message: "Title and body are required." });
    }

    const post = new Post({ title, body });
    const savedPost = await post.save();

    res.status(201).json({ post: savedPost });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Get all posts with populated comments and likes
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("comments") // Ensure 'comments' is defined as an array of ObjectIds in PostModel
      .populate("likes")    // Same for 'likes'
      .exec();

    res.status(200).json({ posts });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};