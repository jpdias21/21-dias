import React from 'react'
type mostrarProps = {
    OnIniciar: ()=> void
}
export const ButtonLista = ({OnIniciar} : mostrarProps) => {
  return (
    <>
    <button onClick={OnIniciar}> Ver o hanking</button>
    </>
  )
}
