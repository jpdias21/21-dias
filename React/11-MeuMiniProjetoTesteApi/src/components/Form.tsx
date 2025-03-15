import React, { useState } from 'react'
import './Form.css'
import axios from 'axios'

function Form() {
  const[name, setName] = useState<string>('')
  const[email, setEmail] = useState<string>('')
  const[passWord, setpassWord] = useState<string>('')
   
 const handleRegistre = (event : React.MouseEvent)=> {
    event.preventDefault()
    axios.post("https://apigenerator.dronahq.com/api/fN-1iJ-b/meuTesteApi", {
        name: name,
        email: email, 
        password: passWord
    })
    .then((response)=>{
        console.log('Registro feito com sucesso', response.data)
    })
    .catch((error)=>{
        console.error('Deu algo de errado', error)
    })
 }
 const handleLogin = (event : React.MouseEvent) =>{
    event.preventDefault()
    axios.get("https://apigenerator.dronahq.com/api/fN-1iJ-b/meuTesteApi")
    .then((response) =>{
        console.log('Login feito com sucesso', response.data)
    } )
    .catch((error) => {
        console.error('Erro no login', error)
    })
 }
  return (
    <>
    <form action="">
        <h3>Formulario</h3>
        <label>Nome </label>
        <input type="text" value={name} placeholder='Digite seu nome' onChange={(event) => setName(event.target.value)} required/>
        <br />
        <label>Email </label>
        <input type="email" value={email} placeholder='Digite seu email' onChange={(event) => setEmail(event.target.value)} required/>
        <br />
        <label>Senha </label>
        <input type="text" value={passWord} placeholder='Digite sua senha' onChange={(event) => setpassWord(event.target.value)} required/>
        <br />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegistre}>Registrar</button>
        <button>Encerra</button>
    </form>
    </>
  )
}

export default Form