const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

//ROUTES//

//CREATE A TODO

app.post("/todos", async (req, res) => {
  try {
    const { title } = req.body;
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (title,description) VALUES ($1,$2)",
      [title, description]
    );

    res.json(newTodo);
  } catch (err) {
    console.log(err.message);
  }
});

//GET ALL TODO

app.get("/todos", async (req, res) => {
  try {
    const getAllTodo = await pool.query("SELECT * FROM todo");
    res.json(getAllTodo);
  } catch (err) {
    console.log(err.message);
  }
});

//GET ONE TODO

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getTodo = await pool.query("SELECT * FROM todo WHERE todo_id=$1", [
      id,
    ]);
    res.json(getTodo);
  } catch (err) {
    console.log(err.message);
  }
});

//UPDATE TODO

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET title = $1, description = $2 WHERE todo_id = $3",
      [title, description, id]
    );
    res.json("Updated");
  } catch (err) {
    console.log(err.message);
  }
});

//DELETE TODO

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id=$1 ", [
      id,
    ]);
    res.json(deleteTodo);
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {

});


