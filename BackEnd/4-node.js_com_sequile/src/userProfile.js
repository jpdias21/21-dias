const bcrypt = require('bcrypt')
const db = require('../models')
const User = db.User
exports.userProfile = async (request, response) => {

try {
    const {name,surname,email,phone,password} = request.body
    const hashedPassWord = await bcrypt.hash(password, 10)
    
    const profile =  User.create({
        name, surname, email, phone, password : hashedPassWord
    }); 
    response.status(200).json({mensagem :'ususario criado com sucesso', usuario : profile})

} catch (error) {
    response.status(500).json({mensagem: 'erro ao criar o usuario', error})
}

}