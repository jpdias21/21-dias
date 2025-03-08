import React from 'react'

type Props = {
   text: string
    name: string 
}

const SecondComponent = (props: Props) => {
  return (
    <>
    <p>Desestruturando a {props.text}</p>
    <p>E adicionando um {props.name}</p>
    </>
  )
}

export default SecondComponent