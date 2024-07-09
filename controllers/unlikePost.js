const mongoose = require("mongoose");

const Post = require("../models/post");
const Like = require("../models/like");

const unlikePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = req.body;

    //create a new like document
    const like = await Like.findOneAndDelete({ user, post_id: id });
    console.log(like);
    //update the post by pushing the like id to the new likes
    const post = await Post.updateOne(
      { _id: id },
      {
        $pull: {
          likes: like._id,
        },
      }
    );
    console.log(post);

    //update krde ab

    res.status(200).json({
      success: true,
      message: "Updated successfully",
    });
  } catch (e) {
    console.error(e);
    res.status(400).json({
      success: false,
      data: "Not able to get the data",
    });
  }
};

module.exports = { unlikePost };
