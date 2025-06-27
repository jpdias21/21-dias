import React from 'react'
import { useNavigate } from 'react-router-dom'

function InitialPage() {

    const navigate = useNavigate()

    const createAccount = () => {
        navigate('/CriateAccount')
    }
    const login = () => {
        navigate('/loginAccount')
    }
  return (

    <>
    <button onClick={createAccount}>Fazer cadastro</button>
    <button onClick={login}>Fazer login</button>
    </>
  )
}

export default InitialPage