const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
      required: true, // ensure every comment is linked to a post
    },
    user: {
      type: String,
      required: true,
      trim: true, // removes leading/trailing whitespace
    },
    body: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt fields automatically
  }
);

module.exports = mongoose.model('Comment', commentSchema);