const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: String,
  body: String,
  isCompleted: Boolean,
});

module.exports = mongoose.model("ToDoItem", todoSchema);
