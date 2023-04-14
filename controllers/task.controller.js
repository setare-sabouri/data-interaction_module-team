const Task = require("../models/task.model");

const getAllTasks = async (req, res) => {
	try { //CRUD functions return promise , thats why i put try,catch to resolve it ..
		const allTasks = await Task.findAll();
		console.log(allTasks);
	} catch (error) {
		console.error(error);
	}
};

const postNewTask = async (req, res) => {
	const { title, description } = req.body;
	console.log("Received new task request:", title);
	try {
		const newTask = await Task.create({ title, description });
		console.log("new task created : ", newTask);
		res.redirect("/tasks");
	} catch (error) {
		console.error(error);
	}
};
module.exports = { postNewTask, getAllTasks };
