const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/todos", (req, res) => {
  res.send({
    todos: [
      {
        id: 3,
        title: "Todo 3",
        description: "This is todo 3",
        completed: false,
      },
      {
        id: 4,
        title: "Todo 4",
        description: "This is todo 4",
        completed: false,
      },
      {
        id: 5,
        title: "Todo 5",
        description: "This is todo 5",
        completed: false,
      },
    ],
  });
});
app.listen(4000, () => {
  console.log("server is working");
});
