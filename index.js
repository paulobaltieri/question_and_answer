const express = require('express')
const app = express()

//Informa ao Express a view engine usada.
app.set("view engine", "ejs")
app.use(express.static('public'))

app.get('/', (req, res) => [
    res.send('Olá mundo')
])
app.get('/home', (req, res) => {
    let nome = "Paulo"
    let sobrenome = "Baltieri"
    let exibirMsg = false
    res.render("principal/home", {
        nome,
        sobrenome,
        exibirMsg
    })
})
app.get('/raca/:nome?', (req, res) => {
    let raca = req.params.nome
    let porte = "Pequeno"
    let origem = "Brasil"
    res.render("principal/raca", {
        raca,
        porte,
        origem
    })
})

app.get('/produtos', (req, res) => {
    let produtos = [
        { nome: "ração prime", valor: 25.00 },
        { nome: "Coleira", valor: 12.00 },
        { nome: "Shampoo", valor: 8.90 }
    ]
    res.render("principal/produtos",{
        produtos
    })
})
app.listen(8080, () => {
    console.log('App funcionando 🚀 ')
})