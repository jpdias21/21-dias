import {useState, useReducer, useEffect} from 'react'

import React from 'react'

function Task() {
  
  type Task = {
    id : number,
    text : string
  }
  type Actions = {type : 'Adicionar', text:string} | {type : 'Remover', id:number} | {type : 'Reset'}

  const stateInicial :Task[] = [] 

    function reducer(state : Task[], action : Actions){
      switch (action.type) {
        case 'Adicionar':
          
          return [...state, {id: Date.now(), text: action.text}]
        case 'Remover':
          return state.filter((task) => task.id !== action.id)

        case 'Reset': 
          return []
      }
    }
  const [input, setInput] = useState<string>('')
  const [state, dispatch] = useReducer(reducer, stateInicial)

  function addTask (){
   dispatch({type: 'Adicionar', text : input})
   setInput('')
  }
  function remove(id : number){
    dispatch({type : 'Remover', id})
  }
  useEffect(() => {
    console.log(state)
  }, [state])
    return (
    <>
    <button onClick={() => dispatch({type:'Reset'})}>Reset</button>
    <br />
    <br />
    <input type="text" value={input} onChange={(event)=> setInput(event.target.value)} onKeyDown={(event) => {
      if(event.key === 'Enter'){
        addTask()
      }
    }} />
    <br />
    <br />
    <button onClick={addTask}>Adicionar</button>
    <hr />
    <br />
    <ul>
      {state.map((task) => (
        <li key={task.id}>
          <span>{task.text}</span> <button  onClick={() => remove(task.id)}>Remever</button>
        </li>
      ))}
    </ul>

    </>
  )
}

export default Task