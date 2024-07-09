const mongoose = require("mongoose");
const Post = require("../models/post");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({})
      .populate("likes")
      .populate("comments")
      .exec();
    res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (e) {
    console.error(e);
    res.status(400).json({
      success: false,
      data: "Not able to get the data",
    });
  }
};

module.exports = { getAllPosts };
