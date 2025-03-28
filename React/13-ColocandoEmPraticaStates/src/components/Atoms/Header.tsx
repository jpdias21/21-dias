import React from 'react'

type HeaderProps = {
  OnIniciar: () => void
}

const Header = ({OnIniciar} : HeaderProps) => {
  return (
    <>
    <h1>Seja bem vindo</h1>
    <br />
    <button onClick={OnIniciar}>Iniciar a votacao</button>
    </>
  )
}

export default Header