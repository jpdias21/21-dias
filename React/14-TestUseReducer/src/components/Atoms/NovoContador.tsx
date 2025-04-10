import React, { useReducer } from 'react'
const estadoInicial = {contador : 0}


type Acoes = {type:'Aumentar'} | {type:'Diminuir'} | {type:'Resetar'}

function reducer (estado : {contador : number}, acao : Acoes){
    switch (acao.type) {
        case 'Aumentar':
            
            return{contador : estado.contador +1}

        case 'Diminuir':
            if(estado.contador === 0){
                return {contador : estado.contador = 0}
            }
            return{contador : estado.contador -1}
        case 'Resetar':
            return {contador : estado.contador = 0}
        default:
            return estado
    }

}

function NovoContador() {
    const [estado, dispatch] = useReducer(reducer, estadoInicial )
    
 return (
    <>
    <button onClick={() => dispatch({type: 'Diminuir'})}>-</button>
    <span>{estado.contador}</span>
    <button onClick={() => dispatch({type: 'Aumentar'})}>+</button>
    <br />
    <br />
    <button onClick={() => dispatch({type:'Resetar'})}>Resetar</button>
    </>
  )
}

export default NovoContador