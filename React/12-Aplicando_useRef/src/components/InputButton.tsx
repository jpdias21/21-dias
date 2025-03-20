import React, { useRef } from 'react'

function InputButton() {
   
    const inputRef = useRef<HTMLInputElement>(null)

    const focarNoInput = () =>{
        inputRef.current?.focus()
    }
  return (
    <>
    <input type="text" ref={inputRef} placeholder='Digite alguma coisa' />
    <button onClick={focarNoInput}>Clique aqui</button>
    </>
  )
}

export default InputButton