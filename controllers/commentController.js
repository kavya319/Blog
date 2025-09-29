// Import models
const Post = require('../models/PostModel');
const Comment = require("../models/commentModel");

// Business logic

// Create a comment
exports.createComment = async (req, res) => {
  try {
    const { post, user, body } = req.body;

    // Validate required fields
    if (!post || !user || !body) {
      return res.status(400).json({ message: "Post, user, and body are required." });
    }

    // Create and save the comment
    const comment = new Comment({ post, user, body });
    const savedComment = await comment.save();

    // Update the post's comments array and populate comments
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }
    )
      .populate("comments")
      .exec();

    // Respond with the updated post
    res.status(201).json({ post: updatedPost });

  } catch (error) {
    console.error("Error creating comment:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};