const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//Informa ao Express a view engine usada.
app.set("view engine", "ejs")
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/question', (req, res) => {
    res.render('question')
})
app.post('/saveQuestion', (req, res) => {
    let title = req.body.title
    let descrition = req.body.descrition
    res.send(`Título: ${title}  Descrição: ${descrition}`)
})
app.listen(8080, () => {
    console.log('App funcionando 🚀 ')
})