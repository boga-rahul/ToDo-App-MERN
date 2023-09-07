const express = require("express");
const {
  getAllTodoItems,
  createNewTodoItem,
  updateTodoItem,
} = require("../controller/todoitemController");
const router = express.Router();

router
  .route("/")
  .get(getAllTodoItems)
  .post(createNewTodoItem)
  .patch(updateTodoItem);

module.exports = router;
