const TaskTable = require("../models/task.model.js");

const getAllTasks = async (req, res) => {
	const allTasks = await TaskTable.findAll();
	res.send("workreknkajkn");
};

const postNewTask = async (req, res) => {
	const { title } = req.body;
	const newTask = await TaskTable.create({ title });
	res.redirect("/tasks");
};

module.exports = { getAllTasks, postNewTask };
