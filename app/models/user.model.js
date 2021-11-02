const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
	return sequelize.define("user", {
		name: {
			type: Sequelize.STRING
		},
		role: {
			type: DataTypes.ENUM("user", "moderator", "admin")
		},
		tasks: {
			type: instance.get("task")
		}
	});
};