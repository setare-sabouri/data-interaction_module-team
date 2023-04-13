const express = require("express");
const router = express.Router(); // not app , but a mini app, (middleware?)
const { getAllTasks } = require("../controllers/task.controller");

router.get("/tasks", (req, res) => {
	getAllTasks();
	res.end();
});

router.get("/tasks/:id", (req, res) => {
	res.send(`a task with id ${req.params.id}`);
});

router.post("/tasks", (req, res) => {
	res.send("Create new task");
});

router.put("/tasks/:id", (req, res) => {
	res.send(`to update a task with ${req.params.id}`);
});

router.delete("/tasks/:id", (req, res) => {
	res.send("to delete a task ");
});

router.delete("/tasks", (req, res) => {
	res.send("to delete all task ");
});

module.exports = router;
