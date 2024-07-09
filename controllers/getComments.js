const mongoose = require("mongoose");
const Comment = require("../models/comment");
const Post = require("../models/post");

const getComments = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.find({ _id: id });

    const comments = post[0].comments;
    console.log(post);
    res.status(200).json({
      success: true,
      message: "Recieved all the comments",
      post: comments,
    });
  } catch (e) {
    console.error(e);
    res.status(400).json({
      success: false,
      data: "Not able to get the data",
    });
  }
};

module.exports = { getComments };
