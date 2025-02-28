import './App.css';
import Calculadora from '../components/Calculadora';
import Historico from '../components/Historico';
import { useState } from 'react';



function App() {
  const [historico, setHistorico] = useState([])
  return (
    <>
    <Calculadora historico={historico} setHistorico={setHistorico}/>
    <br />
    <Historico historico={historico}/>
    </>
  );
}

export default App;