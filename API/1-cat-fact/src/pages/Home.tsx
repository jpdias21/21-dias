import axios from 'axios'
import { useEffect, useState } from 'react'
import './Home.css'

function Home() {
//a/
  const[fatogato,setFatoGato] = useState()

  const buscarFato = () =>{
    const responseData = async () => {
      
      try {
        const response = await axios.get('https://catfact.ninja/fact')
        setFatoGato(response.data.fact)
      } catch (error) {
        console.error('erro', error)
      }
    }
    responseData()
  }

  useEffect(() => {
    buscarFato()
    
  }, [])
  return (
    <>
      {fatogato ? <p>{fatogato}</p> : 'carregando...'}
      <br />
      <button onClick={buscarFato}>Buscar novo fato</button>
    </>
  )
}

export default Home
