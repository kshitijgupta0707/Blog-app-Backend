const mongoose = require("mongoose");
const Post = require("../models/post");

const createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = await Post.create({ title, body, likes: [], comments: [] });
    res.status(200).json({
      success: true,
      data: post,
      message: "Entry created successfully",
    });
  } catch (e) {
    console.error(e);
    res.status(400).json({
      success: false,
      data: "Data is not entered in db",
      message: e,
    });
  }
};

module.exports = {createPost}