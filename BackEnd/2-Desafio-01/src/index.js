const express = require('express')
const app = express()
const pool = require('./db')
const PORT = 3000

app.use(express.json())

///todos os alunos 
app.get('/Alunos', async (request, response) => {

  try {
    const {rows} = await pool.query('SELECT * FROM "Alunos"')
    response.json(rows)
  } catch (error) {
    console.error('Deu erro', error)
    response.status(500).send('Erro no servidor')
  }

})

///Buscar aluno pelo id 
app.get('/Alunos/:id', async (request, response) => {
  const id = request.params.id

  try {
    const resultado = await pool.query('SELECT * FROM "Alunos" WHERE id = $1', [id]) 
      if(resultado.rows.id === 0 ){
        return response.status(404).send('Aluno nao encontrado')
      }
      response.status(200).json(resultado.rows[0])

  } catch (error) {
    console.error(error, 'Deu erro')
    response.status(500).send('Erro ao buscar o aluno')

  }
})
///Cadastrar aluno 
app.post('/Alunos', async (request, response) => {

  const {nome,email,password} = request.body
  try {
    const resultado = await pool.query('INSERT INTO "Alunos" (nome, email, password) VALUES ($1, $2, $3) RETURNING *', [nome, email, password])
    response.status(200).json(resultado.rows[0])

  } catch (error) {
    console.error(error, 'Deu erro')
    response.status(500).json({erro : 'Erro ao cadastrar'})
  }

})


///Deletar alunos 
app.delete('/Alunos/:id', async (request, response) => {
 const id = request.params.id

 try {
  const resultado = await pool.query ('DELETE FROM "Alunos" WHERE id = $1', [id])
  if(resultado.rows.id === 0 ){
    return response.status(404).send('aluno nao encontrado')
  }
  response.status(200).json(resultado.rows[0])
 } catch (error) {
  console.error(error)
  response.status(500).json({erro : 'Erro ao deletar usuario'})
 }

})
app.listen(PORT, () => {
  console.log('Servidor iniciado na porta', PORT);
});