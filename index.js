const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')
const Pergunta = require('./database/Pergunta')
const Resposta = require('./database/Resposta')

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
    Pergunta.findAll({
        raw: true, order: [
            ['id', 'DESC']
        ]
    }).then(perguntas => {
        res.render('index', {
            perguntas: perguntas
        })
    })

})
app.get('/pergunta', (req, res) => {

    if (Pergunta == '') {
        res.redirect('/error404')
    } else {
        res.render('pergunta')
    }
})
app.post('/saveQuestion', (req, res) => {
    let title = req.body.title
    let descrition = req.body.descrition
    Pergunta.create({
        title: title,
   /*   descrition: descrition */
    }).then(() => {
        res.redirect('/')
    })
})
app.get('/questionPage/:id', (req, res) => {
    let id = req.params.id
    Pergunta.findOne({
        where: { id: id }
    }).then(questionPage => {
        if (questionPage != undefined) {
            Resposta.findAll({
                where: { perguntaId: questionPage.id },
                order: [['id', 'DESC']]
            }).then(respostas => {
                res.render('questionPage', {
                    questionPage: questionPage,
                    respostas: respostas
                })
            })
        } else {
            res.redirect('/error404')
        }
    })
})
app.get('/error404', (req, res) => {
    res.render('alertas/error404')
})
app.post('/resposta', (req, res) => {
    let corpo = req.body.corpo
    let perguntaId = req.body.questionPage

    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId,

    }).then(() => {
        res.redirect('/questionPage/' + perguntaId)
    })
})
app.listen(8080, () => {
    console.log('App funcionando 🚀 ')
})