import React, { useReducer } from 'react'

const mealheiroInicial = {moedas : 0}

type Acoes = {type : 'Aumentar'} |{type : 'Dimiuir'}

function reducer(moalheiro : {moedas : number}, acao :Acoes){
switch (acao.type) {
    case 'Aumentar':
        return {moedas : moalheiro.moedas + 1}
    case 'Dimiuir':
        return {moedas : moalheiro.moedas - 1}
    default:
        return moalheiro
} 
}

function Contador() {
  
    const [moalheiro, dispatch] = useReducer(reducer, mealheiroInicial);

    return (
    <>
    <p>{moalheiro.moedas}</p>
    <button onClick={() => dispatch({type: 'Aumentar'})}>Aumentar</button>
    <button onClick={() => dispatch({type: 'Dimiuir'})}>Dimiuir</button>
    </>
  )
}

export default Contador