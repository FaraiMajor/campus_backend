const Sequelize = require("sequelize");
const sequelize = require("../dbconnect");

const Student = sequelize.define('student', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        notEmpty: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true

    },
    imageUrl: {
        type: Sequelize.STRING(500),
        defaultValue: 'https://www.kindpng.com/picc/m/21-214439_free-high-quality-person-icon-default-profile-picture.png'
    },
    gpa: {
        type: Sequelize.FLOAT,
        allowNull: false

    }
})

module.exports = Student;