const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ECommerce } = require("../helpers/connect.multi.mongodb");

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    lowercase: true,
  },
  tag: {
    type: String,
    required: true,
    lowercase: true,
  },
});

module.exports = ECommerce.model("blogs", BlogSchema);
