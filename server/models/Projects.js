const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
  projectImage: {
    imageUrl: {
      type: String,
      required: true,
    },
    publicId: {
      type: String,
      required: true,
    },
  },
  liveLink: {
    type: String,
    required: true,
  },
  srcCodeLink: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Projects", projectSchema);
