import { useState } from "react";

export default function Calculadora({historico,setHistorico}){
    const [numberOne, setNumberOne] = useState('')
    const [secondNumber, setSecondNumber] = useState('')
    const [result, setResult] = useState('')
    

  let calculo ;
  const num1 = parseInt(numberOne)
  const num2 = parseInt(secondNumber)

function Calculo(operadorEscolhido){
    switch (operadorEscolhido) {
    case '+':
        calculo = num1 + num2
        setResult(calculo)       
        break;
    
    case '-':
        calculo = num1 - num2

        setResult(calculo)
        break;
    
    case '/':
        if(parseInt(secondNumber) === 0){
            setResult('Nao e possivel dividir por zero')
        }else(
            calculo = num1 / num2 
        )
        setResult(calculo)
     
        break;
    case '*':
       calculo = num1 * num2
       setResult (calculo)
       
        break;

    default:
        alert('Voce fez algo de errado')
        break;
        }

        setHistorico([...historico, `${numberOne} ${operadorEscolhido} ${secondNumber} = ${calculo}`])
}

    return(
        <>
        <label className="label">
        
            <input type="number" value={numberOne} onChange={event => setNumberOne(event.target.value)} placeholder="Digite numero"/>
        </label>
        <br />
        <label>
            <input type="number" value={secondNumber} onChange={event => setSecondNumber(event.target.value)} placeholder="Digite numero"/>
        </label>
        <br />
        <button onClick={()=> Calculo('+')}>+</button>
        <button onClick={()=> Calculo('-')}>-</button>
        <button onClick={()=> Calculo('/')}>/</button>
        <button onClick={()=> Calculo('*')}>x</button>
        <br />
        <p>Resultado : {result}</p>
        <br />
        
        </>
    )
    
}