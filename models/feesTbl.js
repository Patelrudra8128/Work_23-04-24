const sequelize = require('../config/db');
const {Sequelize, DataTypes} = require("sequelize");


const Fees = sequelize.define("Fees", {
   fees: {
     type: DataTypes.INTEGER,
     allowNull: false
   },
});

sequelize.sync().then(() => {
   console.log('Fees table created successfully!');
}).catch((error) => {
   console.error('Unable to create table Fees : ', error);
});

module.exports = Fees;