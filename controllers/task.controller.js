const Task = require("../models/task.model")

// const getAllTasks = async (req, res) => {
// 	console.log(TaskTable.findAll());

// 	const allTasks = await TaskTable.findAll();
// 	console.log(allTasks);

// 	// res.send("workreknkajkn");
// };

const postNewTask = async (req, res) => {
	const { title } = req.body;
	console.log("Received new task request:", title);
	try {
		const newTask = await Task.create({ title });
		console.log("new task created : ", newTask);
		res.redirect("/tasks");
	} catch (error) {
		console.error(error);
	}
};
module.exports = { postNewTask };
