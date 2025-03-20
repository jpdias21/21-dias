import React, { useState } from 'react'
import { Login } from '../services/authService'

function Form () {
    const [email, setEmail] = useState<string>('')
    const [passWord, setPassWord] = useState<string>('')

  
  const handleLogin = async (event : React.FormEvent) => {
        event.preventDefault()
        await Login (email, passWord,)
    }
   
return (
    <>
    <form onSubmit={handleLogin}>
        <h2>Realize seu login</h2>
        <label>Login</label>
        <input type="email" value={email} placeholder='Digite seu email' onChange={(event) => setEmail(event.target.value)} required />
        <label>Senha</label>
        <input type="text" value={passWord} placeholder='Dite sua senha' onChange={(event) => setPassWord(event.target.value)}/>
        <button type='submit'>Login</button>
    </form>
    
    </>
  )
}

export default Form