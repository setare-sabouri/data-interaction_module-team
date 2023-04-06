
const Sequelize = require("sequelize");


const sequelize = new Sequelize(
    `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tasks = require("./task.model")(sequelize, Sequelize);

module.exports = db
