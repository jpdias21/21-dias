const express =  require('express')
const pool = require('./db')
const app = express()
const PORT = 3000

app.use(express.json())

/// buscar todos os usuarios 
app.get('/alunos', async (req, res) => {
    try {
      const { rows } = await pool.query('SELECT * FROM "Alunos"');
      res.json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro no servidor');
    }
  });

/// buscar usuario especifico   id
app.get('/alunos/:id', async (request, response) => {
  const id =  request.params.id 

  try {
    const resultado = await pool.query('Select * From "Alunos" WHERE id = $1',  [id]
    )     
      if (resultado.rows.length === 0) {
        return response.status(404).send('Aluno não encontrado');
      }

      //
      response.status(200).json(resultado.rows[0])
    
  } catch (error) {
    console.error(error)

    response.status(500).send('Erro ao buscar o aluno')
    
  }

})


//// cadastrar usuario 
app.post('/alunos', async (request, response) => {
    const {nome,email,password} = request.body

    try {
        const resultado = await pool.query(
            'INSERT INTO "Alunos" (nome, email, password) VALUES ($1, $2, $3) RETURNING *',
            [nome, email, password]
          );

          response.status(200).json(resultado.rows[0])
        
    } catch (error) {
        console.error(error)
        response.status(500).json({ erro: 'Falha ao cadastrar' });
    }

})

/// atualizar usuario atravez do id 
app.put('/alunos/:id', async (request, response) => {
  const id =  request.params.id 
  const { nome, email, password } = request.body;

  try {
    // 1. Verifica se o aluno existe
    const verificar = await pool.query('SELECT * FROM "Alunos" WHERE id = $1', [id]);

    if (verificar.rows.length === 0) {
      return response.status(404).json({ mensagem: 'Aluno não encontrado' });
    }

    // 2. Atualiza os dados do aluno
    await pool.query(
      'UPDATE "Alunos" SET nome = $1, email = $2, password = $3 WHERE id = $4',
      [nome, email, password, id]
    );

    // 3. Retorna mensagem de sucesso
    response.status(200).json({
      mensagem: 'Aluno atualizado com sucesso',
      alunoAtualizado: {
        id,
        nome,
        email,
        password
      }
    });

  } catch (erro) {
    console.error('Erro ao atualizar aluno:', erro);
    response.status(500).json({ mensagem: 'Erro interno no servidor' });
  }
})

// deletar usuario atravez do id 
app.delete('/alunos/:id', async (request, response) => {
  const id =  request.params.id 

  try {
    const resultado = await pool.query('Select * From "Alunos" WHERE id = $1',  [id]
    )     
      if (resultado.rows.length === 0) {
        return response.status(404).send('Aluno(id nao encontrado) não encontrado');
      }

      //
      await pool.query('DELETE FROM "Alunos" WHERE id = $1', [id])

      response.status(200).json({
        mensagem : 'Aluno deletado com sucesso',
        alunoRemovido: resultado.rows[0]
      })
    
  } catch (error) {
    console.error(error, 'Eroor ao deletar')

    response.status(500).json({ mensagem: 'Erro interno no servidor' })
    
  }
})




////servidior iniciado 
app.listen(PORT, () => {
    console.log('Servidor iniciado')
})
