import React, { useState } from 'react'
import BotaoVotacao from './BotaoVotacao'

type Citacao = {
  autor : string,
  texto : string
}
function TextoCitacao() {
  const [notaSelecionada, setNotaSelecionada] = useState<number>(0)

  const dados: Citacao [] =[
    {autor: 'Joao Pedro', texto: 'O mundo e cruel para aqueles que nao estao preparados'}, 
    {autor: 'Renato', texto: 'Livre do mundo'}, 
    {autor: 'Gabriel', texto: 'A maioreia e escravo pela propria natureza'}, 
    {autor: 'Maria', texto: 'O mundo e feito pelos fortes'}, 
  ]
  const [indiceAtual,setIndiceAtual] = useState<number>(0)

  const proxima = () => {
    setIndiceAtual((indiceAnterior) => (indiceAnterior + 1) % dados.length)
  }

  return ( 
    <>
    <h3>{dados[indiceAtual].texto}</h3>
    <p>Nome do autor: {dados[indiceAtual].autor}</p>
    <br />
    <span>De uma nota para isso o/a {dados[indiceAtual].autor}</span>
    <br />
    <BotaoVotacao onVoto={setNotaSelecionada}/>
    <br />
    {console.log(notaSelecionada)}
    <br />
    <button onClick={proxima}>Proxima citacao</button>
    </>
  )
}

export default TextoCitacao