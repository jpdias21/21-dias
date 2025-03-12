import { useEffect, useState } from "react"



export default function useCalculo(){

    const [operacao, setOperacao] = useState<string>('')
    const [num1, setNum1] = useState<number>(0)
    const [num2, setNum2] = useState<number>(0)
    const [result, setResult] = useState<number>(0)

    useEffect(() =>{
        switch (operacao) {
            case '+':
                setResult(num1 + num2)
                break;
            case '-':
                setResult(num1 - num2)
                break;
            case '/':
                setResult(num1 / num2)
                break;
            case '*':
                setResult(num1 * num2)
                break;
            default:
                break;
        }
    }, [num1,num2,operacao])

    return{result, setOperacao, setNum1, setNum2,num1,num2}
        
}