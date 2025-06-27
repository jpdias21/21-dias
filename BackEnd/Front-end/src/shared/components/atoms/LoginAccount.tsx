import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function LoginAccount() {
     const [email,SetEmail] = useState<string>('')
     const [password,SetPassWord] = useState<string>('')
     const [showPassWord, SetShowPassWord] = useState<boolean>(false)   
    const navigate = useNavigate()

    const handleShowPassWord = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); 
    SetShowPassWord(!showPassWord)
    return
  }


  const handleLoginAcoount = (event : any) => {
    event.preventDefault()
      try {
        axios.post('http://localhost:3000/login', {email,password})

        .then(response => {
             console.log('Login realixado com sucesso')
             localStorage.setItem('token', response.data.token)
             localStorage.setItem('user', JSON.stringify(response.data.user));

            navigate('/LoginRealizado')
        })
        .catch(error => {
            console.log('deu erro')
            console.error(error)
        })

      } catch (error) {
        console.log('deu ruim no login')
        console.error(error)
      }
  }
  return (
   <>
     <form onSubmit={handleLoginAcoount}>
        <h3>Faça login</h3>
      <label>Email: </label>
      <input type="email" value={email} placeholder='Digite seu Email' required onChange={(event) => SetEmail(event.target.value)}/>
        <br />
      <label>Senha: </label>
      <input type={showPassWord ? 'text' : 'password'} minLength={8} value={password} placeholder='Digite sua senha' required onChange={(event) => SetPassWord(event.target.value)}/>
      <br />
      <button onClick={handleShowPassWord}>Mostra senha</button>
      <br />
      <br />
      <button type='submit'>Fazer Login</button>
    </form>
   </>
  )
}

export default LoginAccount