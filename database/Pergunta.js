const sequelize = require('sequelize')
const connection = require('./database')

const Pergunta = connection.define('perguntas', {
    title: {
        type: sequelize.STRING,
        alloqNull: false
    },
    descrition: {
        type: sequelize.STRING,
        alloqNull: false
    }
})

Pergunta.sync({ force: false }).then(() => {
    console.log('Tabela Criada!')
})

module.exports = Pergunta