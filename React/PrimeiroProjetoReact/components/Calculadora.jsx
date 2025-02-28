import { useState } from "react";

export default function Calculadora({historico, setHistorico}){
    const [numberOne, setNumberOne] = useState('')
    const [numberTwo, setNumberTwo] = useState('')
    const [result, setResult] = useState('')

    function calcular(operacao){
        let num1 = parseInt(numberOne)
        let num2 = parseInt(numberTwo)
        let valor;
        switch (operacao) {
            case '+':
               valor = num1 + num2
               setResult(valor)
                break;
            case '-':
                valor = num1 - num2
               setResult(valor)
               break
            case '*':
                valor = num1 * num2
               setResult(valor)
               break
            case '/':
                if(num1 === 0 || num2 === 0){
                    alert('Nao tem como divir 0 ou por 0')
                    return
                }
                valor = num1 / num2
               setResult(valor)
               break 
            default:
                alert('Aconteceu algo de errado')
                break;
        }
        setHistorico([...historico, `${num1} ${operacao} ${num2} = ${valor}`])
    }

    return(
        <>
        <label>
            <input type="number" value={numberOne} onChange={(event) => setNumberOne(event.target.value)} />
        </label>
        <br />
        <label>
            <input type="number" value={numberTwo} onChange={(event) => setNumberTwo(event.target.value)} />
        </label>
        <br />
        <button onClick={()=> calcular('+')}>+</button>
        <button onClick={()=> calcular('-')}>-</button>
        <button onClick={()=> calcular('*')}>*</button>
        <button onClick={()=> calcular('/')}>/</button>
        <br />
        <p>Resultado : {result}</p>
        </>
    )
}