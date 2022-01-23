const student = require("./models/student");
const campus = require("./models/campus");
const database = require("./dbconnect.js")

Student.belongsTo(Campus);
// Campus.hasMany(Student);

module.exports = {
    student,
    campus,
    database
};