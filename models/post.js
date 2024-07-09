const mongoose = require("mongoose");
const likeSchema = require("./like").schema;
const commentSchema = require("./comment").schema;

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },

  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Like",
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  //good practice ki yha pe sirf id's ho not ccomplete information
  // likes: [likeSchema],
  // comments: [commentSchema],
});

module.exports = mongoose.model("Post", postSchema);
