
import './Home.css'
import Header from '../components/Atoms/Header'
import TextoCitacao from '../components/Atoms/TextoCitacao'
import ListaOrdenada from '../components/Atoms/ListaOrdenada'
import { ButtonLista } from '../components/Atoms/ButtonLista'
import { useState } from 'react'
function Home() {

  const [mostrarCitacao, setMostrarCitacao] = useState(false);
  const [mostrarLista, setMostrarLista] = useState(false)
  return (
    
    <>    
    <Header OnIniciar={() => setMostrarCitacao(true)}/>
    {mostrarCitacao ? <TextoCitacao/> : null} 
    <br />
    <br />
    <ButtonLista OnIniciar={() => setMostrarLista(true)}/>
    {mostrarLista ? <ListaOrdenada/> : null}
    <br />
    
    </>
  )
}

export default Home
