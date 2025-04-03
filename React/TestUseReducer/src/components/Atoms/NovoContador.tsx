import React, { useReducer } from 'react'
const estadoInicial = {contador : 0}


type Acoes = {type:'Aumentar'} | {type:'Diminuir'}

function reducer (estado : {contador : number}, acao : Acoes){
    switch (acao.type) {
        case 'Aumentar':
            
            return{contador : estado.contador + 5}

        case 'Diminuir':
            if(estado.contador === 0 || estado.contador < 0){
                return {contador : estado.contador = 0}
            }
            return{contador : estado.contador -5}
    
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

    </>
  )
}

export default NovoContador