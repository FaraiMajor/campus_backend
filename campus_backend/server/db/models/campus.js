const Sequelize = require("sequelize");
const sequelize = require("../dbconnect");

const Campus = sequelize.define("campus", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING, // string = varcar(255)
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING, // string = varcar(255)
        defaultValue: 'https://www.seattleschools.org/wp-content/uploads/2022/01/featured-news-900-school-grn-1200x0-c-default.jpg'
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: Sequelize.STRING(1234), // string(1234) = varcar(1234)
        allowNull: false
    }
});

module.exports = Customer;