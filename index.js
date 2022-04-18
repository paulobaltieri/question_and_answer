const express = require('express')
const app = express()

//Informa ao Express a view engine usada.
app.set("view engine", "ejs")

app.get('/', (req, res) => [
    res.send('Olá mundo')
])
app.get('/home', (req, res) => {
    let nome = "Paulo"
    let sobrenome = "Baltieri"
    let exibirMsg = "true"
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

app.listen(8080, () => {
    console.log('App funcionando 🚀 ')
})