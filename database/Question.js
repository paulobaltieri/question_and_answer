const sequelize = require('sequelize')
const connection = require('./database')

const question = connection.define('questions', {
    titulo: {
        type: sequelize.STRING,
        alloqNull: false
    },
    description: {
        type: sequelize.STRING,
        alloqNull: false
    }
})

question.sync({ force: false }).then(() => {
    console.log('Tabela Criada!')
})