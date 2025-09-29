const mongoose = require('mongoose');

// Like schema
const LikeSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post', // reference to the post model
    required: true,
  },
  user: {
    type: String,
    required: true,
  }
});

// export
module.exports = mongoose.model('Like', LikeSchema);