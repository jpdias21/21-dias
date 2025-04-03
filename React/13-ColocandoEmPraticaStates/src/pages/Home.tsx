
import './Home.css'
import Header from '../components/Atoms/Header'
import TextoCitacao from '../components/Atoms/TextoCitacao'
import { useState } from 'react'
function Home() {

  const [mostrarCitacao, setMostrarCitacao] = useState(false);
 
  return (
    
    <>    
    <Header OnIniciar={() => setMostrarCitacao(true)}/>
    {mostrarCitacao ? <TextoCitacao/> : null} 
    <br />
    
    <br />
    
    </>
  )
}

export default Home
