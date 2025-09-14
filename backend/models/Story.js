const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  image_url: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  expireAt: { type: Date, default: () => new Date(+new Date() + 24*60*60*1000) } // expires in 24h
});

module.exports = mongoose.model("Story", storySchema);
