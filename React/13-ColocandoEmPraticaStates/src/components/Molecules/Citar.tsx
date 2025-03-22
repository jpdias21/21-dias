import React from 'react'

function Citar() {

  const citacaoes = [ {frase : "Essa e a lei do mais forte, os fracos morrem os fortes prevalecem.", autor: "Joao"}, 
    {frase : "Mundo e lindo", autor: "Renato"},
    {frase : "Trabalho duro", autor: "Gabriel"},
    {frase : "A diciplina vence o telento", autor: "Jorlan"},
    {frase : "Voce esta na selva amigo", autor: "Ramon"}]
    return (
    <>
    {citacaoes.map((citacao, index) => (
        <div key={index}>
            <h2>{citacao.frase}</h2>
            <span>{citacao.autor}</span>
        </div>
    ))
    
    }
    </>
  )
}

export default Citar