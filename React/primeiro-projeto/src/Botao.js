import { useState } from "react"

let Botao = () =>{
    const [soma, setSoma] = useState(0)
    const [frase , setFrase] = useState('Meu nome e')

    console.log(soma)
    console.log(frase)
    const handle = ()=>{
        setSoma(soma + 1)
    }
    
    const handleFrase = ()=>{
        setFrase(frase + ' Joa Pedro')
    }

    return (
        <>
    <button onClick={handle}>Me clique</button>
    
    <button onClick={handleFrase}>Muda de frase</button>
    </>
    )
    
}

export default Botao