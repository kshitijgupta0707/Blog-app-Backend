const mongoose = require("mongoose");
const Comment = require("../models/comment");
const Post = require("../models/post");

const commentOnPost = async (req, res) => {
  try {
    //fetch data from req body
    const { user, body } = req.body;
    //fetcht post id form req params
    const { id } = req.params;

    //create a comment using create or new and save method
    const comment = new Comment({
      user,
      body,
      post_id: id,
    });
    const savedComment = await comment.save();

    //find the post by id and then yo
    // u can replace it
    //push is used to update the entry and  pull is used to delete the entry
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      {
        $push: {
          comments: savedComment._id,
        },
      },
      { new: true }
    )
      .populate("comments") // id ki jagah actual comments dedo bs yeh mtlb hain iska
      .exec(); //execute krdo



    //it will return the updated document new: true ---> 3 paramter
    //you can fetch the actual document using populate //populate the comments arrray with cmment document

    // const post = await Post.updateOne(
    //   { _id: id },
    //   {
    //     $push: {
    //       comments: { $each: [comment] },
    //     },
    //   }
    // );

    res.status(200).json({
      success: true,
      message: "Updated successfully",
      post: updatedPost,
    });
  } catch (e) {
    console.error(e);
    res.status(400).json({
      success: false,
      data: "Not able to get the data",
    });
  }
};

module.exports = { commentOnPost };
