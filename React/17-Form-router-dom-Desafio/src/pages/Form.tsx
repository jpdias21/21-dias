import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
function Form() {
    const [email, setEmail] = useState<string>('')
    const [passWorld, setPassWorld] = useState<string>('')
    const navigate = useNavigate()
    const submit = (event : any) => {
      event.preventDefault()
      console.log('cliclou')
      navigate('/Login')
    }
  return (
    <>
    <form onSubmit={submit}>
      <label htmlFor='email-input'>Email : </label>
        <input type="email" id='email-input' placeholder='Digite seu email' required value={email}  onChange={event => setEmail(event.target.value)  } />
      <br />
      <label htmlFor='passWord-Submit'>PassWord :</label>
        <input type="text" id='passWord-Submit' placeholder='Digite sua senha' required value={passWorld} onChange={event => setPassWorld(event.target.value)} />
    <br />
    <br />
      <button>Iniciar</button>
    </form>
    </>
  )
}

export default Form