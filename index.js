const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')
const Question = require('./database/Question')

connection
    .authenticate()
    .then(() => {
        console.log('Conexão realizada com sucesso 🚀 ')
    })
    .catch((msgErro) => {
        console.log('Erro ao se conectar ao banco de dados', (msgErro))
    })
//Informa ao Express a view engine usada.
app.set("view engine", "ejs")
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    Question.findAll().then(questions => {
        console.log(questions)
    })
    res.render('index')
})
app.get('/question', (req, res) => {
    res.render('question')
})
app.post('/saveQuestion', (req, res) => {
    let title = req.body.title
    let descrition = req.body.descrition
    Question.create({
        title: title,
        descrition: descrition
    }).then(() => {
        res.redirect('/')
    })
})
app.listen(8080, () => {
    console.log('App funcionando 🚀 ')
})