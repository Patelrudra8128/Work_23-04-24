const sequelize = require('../config/db');
const {Sequelize, DataTypes} = require("sequelize");


const Student = sequelize.define("Student", {
   id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     primaryKey : true
   },
   name: {
     type: DataTypes.STRING,
     allowNull: false
   },
   marks: {
     type: DataTypes.INTEGER,
   },
   age: {
     type: DataTypes.INTEGER,
   }
});

sequelize.sync().then(() => {
   console.log('Student table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

module.exports = Student;