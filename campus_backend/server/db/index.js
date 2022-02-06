const student = require("./models/student");
const campus = require("./models/campus");

Student.belongsTo(Campus);
// Campus.hasMany(Student);

module.exports = {
    student,
    campus
};