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
    res.render("principal/home", { nome, sobrenome })
})

app.listen(8080, () => {
    console.log('App funcionando 🚀 ')
})