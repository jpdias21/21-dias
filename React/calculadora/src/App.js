import { useState } from 'react';
import './App.css';

function App() {
  
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [result, setResult] = useState(0)

  const [clique, setClique]= useState(0)
  return (
    <>
      <h1>
        Calculadora
      </h1>
      <label>
        Number 
        <input
        type='number' value={firstNumber}
        onChange={event => setFirstNumber(event.target.value)}
        />
      </label>
      <label>
        Number 
        <input
        type='number' value={secondNumber} 
        onChange={event => setSecondNumber(event.target.value)}
        />
      </label>
      <span>Result : {result}</span>
      <br/>
      <button onClick={() => setResult(firstNumber + secondNumber)}>+</button>
      <button onClick={() => setResult(firstNumber - secondNumber)}>-</button>
      <button onClick={() => setResult(firstNumber / secondNumber)}>/</button>
      <button onClick={() => setResult(firstNumber * secondNumber)}>x</button>

      <br/>
      <br/>
     
     <h2>Voce clicou : {clique}</h2>

     <button onClick={()=> setClique(clique + 1)}>Clique aqui</button>

    </>
  );
}

export default App;


// useState(0)  Cria um estado que começa com o valor 0
// onChange={event => setFirstNumber(...)}  Atualiza o valor do estado quando digita no input
// onClick={() => setResult(firstNumber + secondNumber)}  Faz o cálculo da soma quando clica no botão
// <span>Result: {result}</span>  Mostra o valor do resultado
// <button>+</button> Botão que realiza a soma



