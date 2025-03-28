import React, { useState, useEffect } from 'react'
import BotaoVotacao from './BotaoVotacao'
import ListaOrdenada from './ListaOrdenada'

type Citacao = {
  autor : string,
  texto : string,
  nota : number ,
  
}
function TextoCitacao() {
  const [notaSelecionada, setNotaSelecionada] = useState<number>(0)
  const [dadosComAvaliacao, setDadosComAvaliacao] = useState<Citacao[]>([])
  const [mensagem, setMensagem] = useState<string>('')

  const dados: Citacao [] =[
    {autor: 'Joao Pedro', texto: 'O mundo e cruel para aqueles que nao estao preparados', nota : 0}, 
    {autor: 'Renato', texto: 'Livre do mundo', nota : 0}, 
    {autor: 'Gabriel', texto: 'A maioreia e escravo pela propria natureza', nota : 0}, 
    {autor: 'Maria', texto: 'O mundo e feito pelos fortes', nota : 0}, 
  ]
  const [indiceAtual,setIndiceAtual] = useState<number>(0)

  const proxima = () => {
    if(indiceAtual < dados.length -1){
      setIndiceAtual(indiceAnterior => indiceAnterior +1)
      setMensagem('Passe para proxima')
    }else{
      setMensagem('ACABOU --- ACABOU --- ACABOU')
    }
  }
  
  const handleClick = (valor : number) => {
    setNotaSelecionada(valor)

    setDadosComAvaliacao((prev) => [
      ...prev, {
        autor : dados[indiceAtual].autor,
        texto : dados[indiceAtual].texto,
        nota : valor
      }
    ])
   
  
  }
  useEffect (()=>{
    console.log(dadosComAvaliacao)
  }, [dadosComAvaliacao])

  return ( 
    <>
    <h3>{dados[indiceAtual].texto}</h3>
    <p>Nome do autor: {dados[indiceAtual].autor}</p>
    <br />
    <span style={{color : 'red'}}>De uma nota para isso o/a {dados[indiceAtual].autor}</span>
    <br />
    <br />
    <BotaoVotacao onVoto={handleClick}/>
    <br />
    {mensagem && <p style={{color: 'yellow'}}>{mensagem}</p>}
    <br />
    <button onClick={proxima}>Proxima citacao</button>
    <ListaOrdenada dadosComAvaliacao={dadosComAvaliacao}/>
    </>
  )
}

export default TextoCitacao