const sequelize = require("sequelize");
const Dbconfig = require('../config/config.js')

const Db = new sequelize(Dbconfig)
module.exports = Db;