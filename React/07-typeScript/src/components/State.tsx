import React, { ChangeEvent, useState } from 'react'

const State = () => {
    const [text, setText]= useState<string | null >('')

    const aparecer = (event: ChangeEvent<HTMLInputElement>) => {
        
        setText(event.target.value)
    }

  return (
    <>
    <p>Digitado: {text}</p>
    <input type="text" onChange={aparecer} />
    </>
  )
}

export default State