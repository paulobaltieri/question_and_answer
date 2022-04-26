const sequelize = require('sequelize')
const connection = require('./database')

const Question = connection.define('questions', {
    title: {
        type: sequelize.STRING,
        alloqNull: false
    },
    descrition: {
        type: sequelize.STRING,
        alloqNull: false
    }
})

Question.sync({ force: false }).then(() => {
    console.log('Tabela Criada!')
})

module.exports = Question