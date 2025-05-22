import React from 'react'
import { useNavigate } from 'react-router-dom'

function InitialPages() {
  const navigate = useNavigate()  

  const livroEmprestado = () => {
    navigate('/contralarEmprestimos')
  }

  const pegarLivro = () => {
    navigate('/FormBooks')
  }
 return (
    <>
    <p>Escolha a opcao que voce deseja</p>
    <button onClick={livroEmprestado}>Sistema de controle</button>
    <br />
    <br />
    <button onClick={pegarLivro}>Pegar um livro</button>
    </>
  )
}

export default InitialPages