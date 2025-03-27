import React, { useState } from 'react'

type BotaoVotacaoProps=  {
  onVoto : (valor : number) => void
}

function BotaoVotacao({onVoto} : BotaoVotacaoProps) {
    const votacao = [1,2,3,4,5,6,7,8,9,10]

    
    return (
    <>
    {votacao.map((valor, index) => (
        <button key = {index} onClick={() => onVoto(valor)}>{valor}</button>
    ))}
    </>
  )
}

export default BotaoVotacao 