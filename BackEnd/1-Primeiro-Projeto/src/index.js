const express = require("express")
const app = express()
const PORT = 3000

app.use(express.json())
// Responsavel por pegar todos os alunos 
app.get('/aluno' , (request, response) => {
    console.log(request.query)
    console.log('entrou no alunos ')  
    response.status(200).send('deu certo')


})
// Responsavel por pegar um aluno 
app.get('/aluno/:id/:outro' , (request, response) => {
    console.log(request.params.id)
    console.log(request.params.outro)
    console.log('get aluno id  ')  
    response.status(200).send('deu certo')

})

app.post('/aluno' , (request, response) => {
    console.log(request.body)
    console.log('entrou no post')
    response.status(200).send(request.body)
})

app.listen(PORT, () => {
    console.log('iniciei na porta 3000')
})