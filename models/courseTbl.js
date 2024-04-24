const sequelize = require('../config/db');
const {Sequelize, DataTypes} = require("sequelize");


const Course = sequelize.define("Course", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey : true
      },
    course_name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey : true
    },
});

sequelize.sync().then(() => {
   console.log('Course table created successfully!');
}).catch((error) => {
   console.error('Unable to create table Course : ', error);
});

module.exports = Course;