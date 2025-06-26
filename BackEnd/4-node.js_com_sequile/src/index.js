const express = require('express')
const app = express()
const PORT = 3000
const sequelize = require('./db')

app.use(express.json())

///chamando 
const userControllerLogin = require('./userController')
const userControlerCriateAccount = require('./userProfile')

app.post('/cadastro', userControlerCriateAccount.userProfile
)

app.post('/login', userControllerLogin.userController
  
)

app.listen(PORT, () => {
    console.log('Servidor iniciado')
})

sequelize.authenticate()
.then(() => console.log('✅ Conectado com sucesso à AWS RDS!'))
.catch(err => console.error('❌ Erro ao conectar:', err));
