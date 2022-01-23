const Sequelize = require("sequelize");


const sequelize = new Sequelize('postgresql://localhost/campus_db')
module.exports = sequelize;