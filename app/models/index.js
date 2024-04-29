const { Sequelize } = require('sequelize');
const dbConfig = require('./../config/db.config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USERNAME, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT
});


const db = {}
db.pincode = require('./pincode.model')(sequelize, Sequelize)

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;


try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}