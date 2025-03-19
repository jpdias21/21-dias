import React, { useState } from 'react'
import './FormRegistre.css'
import { Registre } from '../services/authService'

function FormRegistre() {
  const[name, setName] = useState<string>('')
  const[email, setEmail] = useState<string>('')
  const[passWord, setpassWord] = useState<string>('')

 const handleSubmit = async (event :  React.FormEvent) => {
    event.preventDefault()
    await Registre(name, email, passWord)
 }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <h3>Faça seu Registro</h3>
        <label>Nome </label>
        <input type="text" value={name} placeholder='Digite seu nome' onChange={(event) => setName(event.target.value)} required/>
        <br />
        <label>Email </label>
        <input type="email" value={email} placeholder='Digite seu email' onChange={(event) => setEmail(event.target.value)} required/>
        <br />
        <label>Senha </label>
        <input type="text" value={passWord} placeholder='Digite sua senha' onChange={(event) => setpassWord(event.target.value)} required/>
        <br />
        <button type='submit'> Registrar</button>
    </form>
    <br />
    
    </>
  )
}

export default FormRegistre