const express = require("express");
const tasksRouter = require('./routes/task.routs');
require("dotenv").config();
const app = express();
const port = 3000;
<<<<<<< HEAD
const sequelize = require("./models/index")
=======
const sequelize = require("./models/index");

>>>>>>> 4f252f1d52f034daa6465580cd646ada246683fd
const main = async () => {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};

app.use(tasksRouter);

app.get("/", (req, res) => {
	res.send("Welcome");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

main();
