require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const connectDB = require("./config/dbConn");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors(corsOptions));
app.use(express.json());
app.use("/register", require("./routes/register"));
app.use("/todo", require("./routes/todoitems"));
app.all("/", (req, res) => {
  res.send("Hello world");
});

// Only on successful connection
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));
});
