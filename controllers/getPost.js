const mongoose = require("mongoose");
const Post = require("../models/post");

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id).populate('likes').populate('comments').exec();

    res.status(200).json({
      success: true,
      data: post,
    });
  } catch (e) {
    console.error(e);
    res.status(400).json({
      success: false,
      data: "Not able to get the data",
    });
  }
};

module.exports = { getPostById };
