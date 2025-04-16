import React, { useEffect, useState } from 'react'
import axios from 'axios'
type CitacaoType = {
    id : number
    citacao : string
}
function Ranking() {

    const [citacao, setCitacao] = useState<CitacaoType[]>([])
    const [citacaoAtual, setCitacaoAtual] = useState<number>(0)

    const passar = () => {
        if(citacao && citacaoAtual < citacao.length -1){
            setCitacaoAtual(citacaoAtual + 1)
        }
        if(citacaoAtual === citacao.length -1){
            setCitacaoAtual(0)
        }
    }
useEffect(() => {
    
    const responseData = async () => {
        try {
            const response = await axios.get('https://apigenerator.dronahq.com/api/F0Tov9J2/citacaoes')
            setCitacao(response.data)
        } catch (error) {
            console.error('Error', error)
        }
    }
    responseData()
    } , [])
    return (
  <>
  {citacao && citacao.length  > 0 ? (
   <ol>
    <ul>
    <p>{citacao[citacaoAtual].id}</p>
    <h2>{citacao[citacaoAtual].citacao}</h2>
    </ul>
   </ol>
  ) : (<p>Carrregando...</p> )}
  <br /> <hr />
  <br />
  <button onClick={passar}>Passar citacao</button>
  </>
  )
}

export default Ranking


