import useCalculo from "../hooks/useCalculo";

export default function Calculador(){
 const {result, setOperacao, setNum1, setNum2, num1,num2 } = useCalculo();

 return(
    <>
    <p>Resultado : {result}</p>
    <label>
        <input type="number" value={num1} onChange={(event) => setNum1(Number(event.target.value))} />
    </label>
    <br />
    <br />
    <label>
        <input type="number" value={num2} onChange={(event) => setNum2(Number(event.target.value))}  />
    </label>
    <br />
    <br />
    <button onClick={() => setOperacao('+')}>+</button>
    <button onClick={() => setOperacao('-')}>-</button>
    <button onClick={() => setOperacao('*')}>*</button>
    <button onClick={() => setOperacao('/')}>/</button>
    <br />
    </>
 )
}