const express = require("express")
const app = express()
const PORT = 3000

app.use(express.json())

app.get('/aluno' , (req, res) => {
    console.log(req.query)
    console.log('entrou no alunos ')  
    res.status(200).send('deu certo')


})

app.listen(PORT, () => {
    console.log('iniciei na porta 3000')
})