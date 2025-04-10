import React, { useReducer } from 'react'

type Estado = {
    moedas : number,
    showText : boolean,
    moedas1 : number,
    showText1 : boolean
}

const estadoInicial : Estado = {
    moedas : 0 , 
    showText : true, 
    moedas1 : 0, 
    showText1: true, 
}

type Acoes =  {type : "AlterarTudo"}

function reducer(estado : typeof estadoInicial, acao :Acoes){
switch (acao.type) {
    case 'AlterarTudo':
        return {
            moedas: estado.moedas +1 , 
            showText : !estado.showText, 
            moedas1: estado.moedas1 -1, 
            showText1: !estado.showText1 }
    default:
        return estado
} 
}

function Contador() {
  
    const [estado, dispatch] = useReducer(reducer, estadoInicial);

    return (
    <>
     {estado.showText ? 'Mostrando texto' : ''}
    <p>{estado.moedas}</p>
    <br />
    <button onClick={() => dispatch({type:'AlterarTudo'})}>button</button>
    <p>{estado.moedas1}</p>
    <br />
    {estado.showText1 ? "" : 'Apagou o texto'}
    </>
  )
}

export default Contador