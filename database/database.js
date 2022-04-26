const sequelize = require('sequelize')
const connection = new sequelize('questiondb', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection