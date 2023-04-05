const express = require("express");
const { Sequelize, DataTypes, UUID } = require("sequelize");
require("dotenv").config();
const app = express();
const port = 3000;
app.set("view engine", "ejs")
const sequelize = new Sequelize(
	`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`
);

const Task = sequelize.define("Task", {
	id: {
		primaryKey: true,
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: "U didn't pick a title stoopid",
	},
	completed: {
		type: DataTypes.BOOLEAN,
	},
});

const main = async () => {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};

app.get("/", (req, res) => {
	// res.send("Hello World!");
	res.render("index")
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

main();
