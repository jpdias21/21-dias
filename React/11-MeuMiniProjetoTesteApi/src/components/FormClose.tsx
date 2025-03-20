import React, { useState } from 'react'
import axios from 'axios'
function FormClose (){
  const [email, setEmail] = useState<string>('')
  const [passWord, setPassWord] = useState<string>('')

  const handleClose = async (event : React.FormEvent) => {
    event.preventDefault()
    try {
      let response = await axios.get("https://apigenerator.dronahq.com/api/04PNM4fR/meuTesteApi")

    // Procura o usuário com base no nome, email e senha
    const user = response.data.find((user: any) => 
      user.email === email && user.passWord === passWord
    );

    if (user) {
      console.log('Usuário encontrado. ID:', user.id);
      try {
        axios.delete(`https://apigenerator.dronahq.com/api/04PNM4fR/meuTesteApi/${user.id}`)
        console.log('Usuario deletado com sucesso')
      } catch (error) {
        console.error('Deu erro', error)
      }
    } else {
      console.log('Usuário não encontrado.');
      return null;
    }
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    return null;
  }
}
  return (
   <>
   <form onSubmit={handleClose}>
    <h2>Encerre sua conta</h2>
    <label>Email</label>
    <input type="email" value={email} placeholder='Digite sue email' onChange={(event) => setEmail(event.target.value)} />
    <label>Senha</label>
    <input type="text" value={passWord} placeholder='Digite sua senha' onChange={(event) => setPassWord(event.target.value)} />
    <button type='submit'>Encerrar conta</button>
   </form>
   </>
  )
}

export default FormClose