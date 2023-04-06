const express = require("express");
const tasksRouter = require('./routes/task.routs');
require("dotenv").config();
const app = express();
const port = 3000;
const db = require("./models/index");

const main = async () => {
	try {
		await db.sequelize.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};
app.use(tasksRouter);


db.sequelize.sync()
	.then(() => {
		console.log("Synced db.");
	})
	.catch((err) => {
		console.log("Failed to sync db: " + err.message);
	});

app.get("/", (req, res) => {
	res.send("Welcome");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});



main();
