const ToDoItem = require("../model/ToDoItem");

const getAllTodoItems = async (req, res) => {
  const items = await ToDoItem.find();

  if (!items) return res.status(204).json({ message: "No items found" });

  return res.json(items);
};

const createNewTodoItem = async (req, res) => {
  console.log(req.body);
  try {
    const result = await ToDoItem.create({
      title: req.body.title,
      body: req.body.body,
      isCompleted: false,
    });

    return res.status(201).json(result);
  } catch (err) {
    console.log(err);
  }
};

const updateTodoItem = async (req, res) => {
  try {
    const result = await ToDoItem.findById(req.body._id);
    result.title = req.body.title;
    result.body = req.body.body;
    result.isCompleted = req.body.isCompleted;

    const response = await result.save();

    return res.status(201).json(response);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllTodoItems,
  createNewTodoItem,
  updateTodoItem,
};
