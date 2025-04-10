import React, { useEffect, useReducer, useState } from 'react'

function Teste() {
    type Task= {
        id : number,
        name : string,
        price : string
    }
    type Actions = 
    | {type: 'Adiciona_Produto', payload : Task} 
    | {type: 'Remover_Produto', payload: number} 
    | {type : 'Atualizar_Produto', payload: Task}

    const stateInitial : Task [] = []
    
    function reducer(state: Task[], action: Actions ){
        switch (action.type) {
            case 'Adiciona_Produto':
                return [...state, {id : action.payload.id, name :action.payload.name, price: action.payload.price}]
            case 'Atualizar_Produto':
                return 
            case 'Remover_Produto':
                return state.filter((event) => event.id !== action.payload)
            
            default:
               return state
        }
    }

    
    const[state, dispatch] = useReducer(reducer, stateInitial)
    useEffect(() => {
        console.log(state)
    }, [state])

    const [produto, setProduto] = useState<string>('')
    const [valorProduto, setValorProduto] = useState<string>()
    
    const [newName, setNewName] = useState<string>()
    const [newPrice, setNewPrice] = useState<string>()
    const [idAtualizando, setIdAtulaizando] = useState<number>()

    function Atualizar(id : number, name: string, price: string){
        setNewName(name)
        setNewPrice(price)
        setIdAtulaizando(id)
        
    }

return (
   <>
   <h1>Gerenciador de produtos</h1>
   <label id='produto'>Produto : </label>
   <input id='produto' type="text" value={produto} onChange={(event) => setProduto(event.target.value)} />
   <br />
   <br />
   <label id='valorProduto'>Valor do produto :</label>
   <input id='valorProduto' type='text' value={valorProduto} onChange={(event) => setValorProduto(event.target.value)}/>
   <br />
   <br />
   <button onClick={() => dispatch({type: 'Adiciona_Produto', payload:{
    id: Date.now(),
    name: produto || '',
    price : valorProduto || ''
   }})}>Adicionar</button>
   <blockquote/>
   <hr /><br />
   {state.map((event)=> 
    <li>
        <ul key={event.id}>
        <span>Produto : {event.name} | Valor do produto : {event.price}</span> <button onClick={() => dispatch({type: 'Remover_Produto', payload: event.id})}>Remover</button>
        <button onClick={()=> Atualizar(event.id, event.name, event.price)}>Atualizar</button>

        </ul>
    </li>
)}
   </>
  )
}

export default Teste