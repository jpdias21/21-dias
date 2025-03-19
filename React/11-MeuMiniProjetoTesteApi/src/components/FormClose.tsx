import React, { useState } from 'react'
import { CloseAccount } from '../services/authService'
function FormClose (){
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [passWord, setPassWord] = useState<string>('')

  const handleRegistre = async (event : React.FormEvent) => {
    event.preventDefault()
    await CloseAccount(name,email, passWord)
  }
  return (
   <>
   <form onSubmit={handleRegistre}>
    <h2>Encerre sua conta</h2>
    <label>Nome</label>
    <input type="text" value={name} placeholder='Digite seu nome' onChange={(event) => setName(event.target.value)} />
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