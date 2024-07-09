const mongoose = require("mongoose");

const Post = require("../models/post");
const Like = require("../models/like");

const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = req.body;

    //create a new like document
    const like = await Like.create({ user, post_id: id });

    //update the post by pushing the like id to the new likes
    const post = await Post.updateOne(
      { _id: id },
      {
        $push: {
          likes: like._id,
        },
      },
      { new: true }
    );

    //update krde ab

    res.status(200).json({
      success: true,
      message: "Updated successfully",
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

// const likePost = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const { user } = req.body;

//     const post = await Post.findById(id);
//     const { likes } = post;

//     const newLike = [...likes];

//     await Like.create({ user });

//     newLike.push(Like);

//     //update krde ab

//     const update = await Post.findByIdAndUpdate(id, {
//       likes: newLike,
//     });

//     res.status(200).json({
//       success: true,
//       message: "Updated successfully",
//     });
//   } catch (e) {
//     console.error(e);
//     res.status(400).json({
//       success: false,
//       data: "Not able to get the data",
//     });
//   }
// };

module.exports = { likePost };
