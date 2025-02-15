import { useState, useEffect } from "react"



function Botao (){
    const [click, setClik] = useState(0)

    useEffect(() => {
        console.log(`Voce clicou ${click}`)
    }, [click])
    return (
        <>
        <span>Voce clicou em mim {click}</span>
        <br />
        <button onClick={()=> setClik(click + 1)}>Clique em mim</button>

        </>
    )
}




export default Botao 
