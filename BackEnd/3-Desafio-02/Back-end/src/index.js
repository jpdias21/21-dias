const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')
const pool = require('./db')


app.use(express.json())
app.use(cors())

app.get('/Cadastro', async (request, response) => {
    try {
        const {rows} = await pool.query('SELECT * FROM "carros"')
        response.json(rows)
    } catch (error) {
        console.error(error, 'deu erro')
        response.status(500).send('Deu erro')
    }
})


app.post('/cadastro', (request, response) => {
    const { marca_carro,modelo_carro,ano_carro,cor,estado_do_veiculo,numero_de_portas,quilometragem,valor_carro} = request.body

    try {
        const resultado = pool.query('INSERT INTO "carros" (marca_carro,modelo_carro,ano_carro,cor,estado_do_veiculo,numero_de_portas,quilometragem,valor_carro) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *', [marca_carro,modelo_carro,ano_carro,cor,estado_do_veiculo,numero_de_portas,quilometragem,valor_carro])
        response.status(200).json(resultado.rows[0])
    } catch (error) {
            console.error(error, 'deu erro')
            response.status(500).json({erro: 'Erro ao cadastrar'})
    }
})

app.listen(PORT, () => {
    console.log('Sercidor iniciado')
})