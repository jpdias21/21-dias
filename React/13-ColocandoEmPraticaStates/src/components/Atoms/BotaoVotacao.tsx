import React, { useState } from 'react'

function BotaoVotacao() {
    const votacao = [1,2,3,4,5,6,7,8,9,10]
    const [valorEscolhido, setValorEscolhido] = useState<number>(0)

    console.log(valorEscolhido)
    return (
    <>
    {votacao.map((valor, index) => (
        <button key = {index} onClick={()=> setValorEscolhido(valor)}>{valor}</button>
    ))}
    </>
  )
}

export default BotaoVotacao