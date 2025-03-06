import { useState } from "react"


export default function useTexto(){
    const [texto, setTexto] = useState('')

    function mudarTexto(textoRecebido){
        setTexto(textoRecebido)
    }

    function limparTexto(){
        setTexto('')
    }

    return{texto, mudarTexto, limparTexto}
}