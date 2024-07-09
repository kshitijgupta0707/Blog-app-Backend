const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  post_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
});

module.exports = mongoose.model("Like", likeSchema);
