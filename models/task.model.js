
const { DataTypes, UUID } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("Task", {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DatasTypes.UUIDV4,
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

    return Task;
};