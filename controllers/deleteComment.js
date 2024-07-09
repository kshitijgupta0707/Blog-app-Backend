const mongoose = require("mongoose");
const Comment = require("../models/comment");
const Post = require("../models/post");

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = req.body;

    const comment = await Comment.findOneAndDelete({ user, post_id: id });

    const post = await Post.updateOne(
      {
        _id: id,
      },
      {
        $pull: {
          comments: comment,
        },
      }
    );

    res.status(200).json({
      success: true,
      message: "Deleted the comment",
      post: post,
    });
  } catch (e) {
    console.error(e);
    res.status(400).json({
      success: false,
      data: "Not able to get the data",
    });
  }
};

module.exports = { deleteComment };
