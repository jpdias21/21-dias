import './App.css';
import Calculadora from '../components/Calculadora';
import Historico from '../components/Historico';
import { useState } from 'react';


function App() {
  const [historico, setHistorico] = useState([])
  return (
    <>
      <div className="app-container">
        <h1>Calculadora</h1>

        <Calculadora setHistorico={setHistorico} historico={historico} /> {/* Passando para Calculador */}
        <Historico resultados={historico} /> {/* Passando para o Historico */}
        <br />
       
      </div>
    </>
  );
}

export default App;