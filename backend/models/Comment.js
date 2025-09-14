const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true }, // post ID
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // commenter
  text: { type: String, required: true }, // comment text
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Comment", commentSchema);
