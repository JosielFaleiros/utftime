var Sequelize = require('sequelize');
var config = require('./../config/config.js')
module.exports = new Sequelize(config.DATABASE, config.USUARIO, config.PASSWORD, {
  host: config.HOST,
  dialect: config.DIALECT,
});