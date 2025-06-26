const bcrypt = require('bcrypt')
const db = require('../models');
require('dotenv').config(); 
const secret = process.env.JWT_SECRET
const User = db.User;
const jwt = require('jsonwebtoken')

exports.userController = async(request, response) => {
    try {

        const {email,password} = request.body

        const usuario = await User.findOne({where : {email}})

        if(!usuario){
            return response.status(200).json({mensagem : 'Usuario nao encontrado'})
        }

        const senhaCorreta = await bcrypt.compare(password, usuario.password)

        if(!senhaCorreta){
            return response.status(200).json({mensagem : 'senha incorreta'})
        }

        const token = jwt.sign(
            {id : usuario.id, email: usuario.email }, 
            secret,
            {expiresIn : 3600} 
           
        )
        return response.status(200).json({mensagem : 'login realizado com sucesso', token, user : {
            id: usuario.id,
            nome: usuario.name,
            sobrenome: usuario.surname,
            email: usuario.email
        }
        })
    } catch (error) {
        console.error('Erro no login', error)
        return response.status(500).json({erro: 'erro ao fazer login'})
    }
}