const TaskTable = require("../models/task.model.js");

const Task = require("../models");
console.log(Task);

const getAllTasks = () => {
	console.log(TaskTable);
};

module.exports = { getAllTasks };
